# RedDrop Database Model

## Core User

### app_users

Stores authentication and authorization information.

Fields:

- id
- email
- password_hash
- role
- account_status
- created_at
- updated_at

Roles:

- DONOR
- ORGANIZATION
- ADMIN

---

## Donor Profile

### donor_profiles

Stores blood donor information.

Fields:

- id
- user_id
- full_name
- date_of_birth
- blood_group
- phone_number
- province
- district
- city
- emergency_notifications_enabled
- created_at

Relationship:

app_users.id  
→ donor_profiles.user_id

One AppUser can have one DonorProfile.

---

## Organization

### organizations

Stores hospital, blood bank and donation center information.

Fields:

- id
- user_id
- organization_name
- organization_type
- registration_number
- phone_number
- address_line
- district
- city
- verification_status
- created_at

Relationship:

app_users.id  
→ organizations.user_id

One organization account has one organization profile.

Verification statuses:

- PENDING
- VERIFIED
- REJECTED

Organization types:

- HOSPITAL
- BLOOD_BANK
- DONATION_CENTER
- OTHER