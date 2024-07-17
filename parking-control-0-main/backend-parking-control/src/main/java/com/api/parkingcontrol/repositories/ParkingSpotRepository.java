package com.api.parkingcontrol.repositories;

import com.api.parkingcontrol.models.ParkingSpotModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ParkingSpotRepository extends JpaRepository<ParkingSpotModel, UUID> {
    @Query(nativeQuery = true,
            value = """
                    select * from tb_parking_Spot 
                    where 
                        lower(responsible_name) like concat('%', lower(:value), '%') 
                        or parking_spot_number like concat('%', :value, '%')
            """ )
    List<ParkingSpotModel> findAllByNameOrSpotNumber(@Param("value") String value);


    boolean existsByLicensePlateCar(String licensePlateCar);

    boolean existsByParkingSpotNumber(String parkingSpotNumber);

    boolean existsByApartmentAndBlock(String apartment, String block);
}
