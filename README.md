## Set permissions (if linux/mac)
- `sudo chmod 400 <keyname>.pem`
## Connect to instance
- `ssh -i "keyname.pem" ubuntu@youripaddress`
## Setup instance
- `sudo apt-get update`
- `sudo apt-get upgrade`
## Install Java
- `sudo apt-get install default-jdk`
- `sudo apt-get install maven`
## Install Node
- `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`
- `sudo apt-get install nodejs`
## Build and run java
- `git clone <repo>`
- cd into backend repo
- `mvn install`
- `mvn package`
- cd into target
- `java -jar spark-react-lab-1.0-SNAPSHOT-jar-with-dependencies.jar`
## Build and run node
- cd into front end
- `npm i`
- `npm run build`
- `PORT=80 node server.js`