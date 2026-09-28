package com.reddrop.donor.repository;

import com.reddrop.donor.entity.BloodGroup;
import com.reddrop.donor.entity.DonorProfile;
import com.reddrop.user.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DonorProfileRepository extends JpaRepository<DonorProfile, Long> {

    Optional<DonorProfile> findByUser(AppUser user);

    List<DonorProfile> findByBloodGroup(BloodGroup bloodGroup);

    List<DonorProfile> findByCityAndBloodGroup(String city, BloodGroup bloodGroup);

    List<DonorProfile> findByAvailableTrue();
}
