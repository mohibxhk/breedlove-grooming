#!/usr/bin/env python3
"""
Backend API Test Suite for Breedlove Grooming
Tests all API endpoints defined in /app/app/api/[[...path]]/route.js
"""

import requests
import json
import sys
from datetime import datetime

# Base URL from .env
BASE_URL = "https://breedlove-grooming.preview.emergentagent.com/api"

def print_test_header(test_name):
    print(f"\n{'='*60}")
    print(f"TEST: {test_name}")
    print(f"{'='*60}")

def print_result(success, message):
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")

def test_health_endpoint():
    """Test GET /api -> should return { ok: true, service: 'Breedlove API' }"""
    print_test_header("GET /api (Health Check)")
    try:
        response = requests.get(BASE_URL, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('ok') == True and data.get('service') == 'Breedlove API':
                print_result(True, "Health endpoint returned correct response")
                return True
            else:
                print_result(False, f"Unexpected response structure: {data}")
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_health_explicit():
    """Test GET /api/health -> should return { ok: true, service: 'Breedlove API' }"""
    print_test_header("GET /api/health")
    try:
        response = requests.get(f"{BASE_URL}/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('ok') == True:
                print_result(True, "Health endpoint returned ok: true")
                return True
            else:
                print_result(False, f"Unexpected response: {data}")
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_create_booking():
    """Test POST /api/bookings -> should create booking and return with id, status, createdAt"""
    print_test_header("POST /api/bookings (Create Booking)")
    
    booking_data = {
        "service": "signature-spa-groom",
        "petName": "Bella",
        "petBreed": "Goldendoodle",
        "petAge": "3 years",
        "petSize": "medium",
        "notes": "Friendly, slightly anxious during baths",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "name": "Jennifer M.",
        "email": "jen@example.com",
        "phone": "(309) 555-0123"
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/bookings",
            json=booking_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('ok') == True and 'booking' in data:
                booking = data['booking']
                # Verify required fields
                if all(key in booking for key in ['id', 'status', 'createdAt']):
                    if booking['status'] == 'pending':
                        print_result(True, f"Booking created successfully with id: {booking['id']}")
                        return True, booking['id']
                    else:
                        print_result(False, f"Expected status 'pending', got '{booking['status']}'")
                        return False, None
                else:
                    print_result(False, f"Missing required fields in booking: {booking}")
                    return False, None
            else:
                print_result(False, f"Unexpected response structure: {data}")
                return False, None
        else:
            print_result(False, f"Expected 200, got {response.status_code}")
            return False, None
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False, None

def test_list_bookings():
    """Test GET /api/bookings -> should return list of bookings"""
    print_test_header("GET /api/bookings (List Bookings)")
    try:
        response = requests.get(f"{BASE_URL}/bookings", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:500]}...")  # Truncate long responses
        
        if response.status_code == 200:
            data = response.json()
            if 'items' in data and isinstance(data['items'], list):
                print_result(True, f"Retrieved {len(data['items'])} bookings")
                return True, data['items']
            else:
                print_result(False, f"Expected 'items' array, got: {data}")
                return False, []
        else:
            print_result(False, f"Expected 200, got {response.status_code}")
            return False, []
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False, []

def test_create_contact():
    """Test POST /api/contact -> should create contact message"""
    print_test_header("POST /api/contact (Create Contact Message)")
    
    contact_data = {
        "name": "Test User",
        "email": "test@example.com",
        "phone": "1234567890",
        "message": "Hi, do you groom Maine Coons?"
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('ok') == True and 'message' in data:
                message = data['message']
                if all(key in message for key in ['id', 'createdAt']):
                    print_result(True, f"Contact message created with id: {message['id']}")
                    return True
                else:
                    print_result(False, f"Missing required fields in message: {message}")
                    return False
            else:
                print_result(False, f"Unexpected response structure: {data}")
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_404_endpoint():
    """Test GET /api/nonexistent -> should return 404"""
    print_test_header("GET /api/nonexistent (404 Test)")
    try:
        response = requests.get(f"{BASE_URL}/nonexistent", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 404:
            data = response.json()
            if 'error' in data:
                print_result(True, "404 endpoint returned correct error response")
                return True
            else:
                print_result(False, f"Expected error field in response: {data}")
                return False
        else:
            print_result(False, f"Expected 404, got {response.status_code}")
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def verify_booking_persistence(booking_id):
    """Verify that the created booking exists in the list"""
    print_test_header("Verify Booking Persistence")
    try:
        success, bookings = test_list_bookings()
        if success:
            found = any(b.get('id') == booking_id for b in bookings)
            if found:
                print_result(True, f"Booking {booking_id} found in database")
                return True
            else:
                print_result(False, f"Booking {booking_id} NOT found in database")
                return False
        else:
            print_result(False, "Could not retrieve bookings to verify persistence")
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def main():
    print("\n" + "="*60)
    print("BREEDLOVE GROOMING API TEST SUITE")
    print("="*60)
    print(f"Base URL: {BASE_URL}")
    print(f"Test Time: {datetime.now().isoformat()}")
    
    results = {}
    
    # Test 1: Health check (root)
    results['health_root'] = test_health_endpoint()
    
    # Test 2: Health check (explicit)
    results['health_explicit'] = test_health_explicit()
    
    # Test 3: Create booking
    booking_success, booking_id = test_create_booking()
    results['create_booking'] = booking_success
    
    # Test 4: List bookings (first call)
    list_success, _ = test_list_bookings()
    results['list_bookings'] = list_success
    
    # Test 5: Verify persistence
    if booking_id:
        results['booking_persistence'] = verify_booking_persistence(booking_id)
    else:
        results['booking_persistence'] = False
        print_test_header("Verify Booking Persistence")
        print_result(False, "Skipped - no booking ID available")
    
    # Test 6: Create contact
    results['create_contact'] = test_create_contact()
    
    # Test 7: 404 handling
    results['test_404'] = test_404_endpoint()
    
    # Summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 ALL TESTS PASSED!")
        return 0
    else:
        print(f"\n⚠️  {total - passed} test(s) failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())
