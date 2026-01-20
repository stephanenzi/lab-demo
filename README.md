K8 - Architecture parts explain
!
Control plane component are listed below
    API SERVER: this is first entry point of the k8 cluster from user
    SCHEDULAR: this will schedule work or request by user and it gets instructions from api server
    CONTROLLER MANAGER: makes sure all other controllers are working or in a state that they are supposed to be, example make sure all the worker nodes are in good condition
    ETCD: is some kind of database that stores information about the K8 cluster. It authenticate, validate and updates and send response to api-server. 
    REPLICATION CONTROLLER: this ensures that a specific number of identical Pod replicas are running at all times

Kubernetes everyday basic commands

A pod is the smallest element on a k8 cluster
a group of whales forms a pod same as a goup of container forms a pod
A pod is a collection of containers with other resources

alias k=kubectl

#K - BASIC COMMANDS:
- kubectl get pods
    will list all your pods in a specific node with minimal details
- k get pods -o wide
    will list all pods with a little more detail info like ip addresses
- k edit pod <pod-name>
    this will display the pod information in a yaml format
- k describe pod <pod-name>
    this will give you a discription or detail information of the pod specified
- k run ngnix-yaml --image=nginx --dry-run=client -o yaml
    this command will create a manifest for pod in the current screen in yaml format but if you add [> test.yaml] then the result will be append to the file
- k create -f <file-name>
    this will create your pod or resources if it does not exist but if it does then it will error out.
- k apply -f <file-name>
    this will create your pod or resources or if it does exist it will still run and make any changes you want to make.
- k delete pod <pod-name> 
    will delete a specific pod
- k exec <file-name> -it /bin/bash
    this will take you into the bash of the container specified for you to run normal linux commands on that container
- k edit rs/nginx-rs
    this command is used to make a live editing of a replica set manifest
- k scale --replicas=6 rs/nginx-rs
    this will also scale the replica set [nginx-rs] to the number specified (6)
- k create deployment <name of deployment> --image=httpd --replicas=5
    this command creates 5 replicas of httpd pods
