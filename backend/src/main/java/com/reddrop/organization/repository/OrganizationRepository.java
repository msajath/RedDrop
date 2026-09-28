package com.reddrop.organization.repository;

import com.reddrop.organization.entity.Organization;
<parameter name="CodeContent">package com.reddrop.organization.repository;

import com.reddrop.organization.entity.Organization;
import com.reddrop.organization.entity.OrganizationType;
import com.reddrop.organization.entity.VerificationStatus;
import com.reddrop.user.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrganizationRepository extends JpaRepository<Organization, Long> {

    Optional<Organization> findByUser(AppUser user);

    List<Organization> findByVerificationStatus(VerificationStatus status);

    List<Organization> findByOrganizationType(OrganizationType type);
}
