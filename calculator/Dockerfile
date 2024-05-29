FROM maven:3.8.4-openjdk-17 AS build
COPY . .
RUN mvn clean package -e -DskipTests

FROM eclipse-temurin:21
COPY --from=build /target/asn1-0.01-SNAPSHOT.jar /opt/app/calculator.jar
CMD ["java","-jar","/opt/app/calculator.jar"]
