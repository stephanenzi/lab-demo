Kubernetes everyday basic commands

A pod is the smallest element on a k8 cluster
a group of whales forms a pod same as a goup of container forms a pod
A pod is a collection of containers with other resources

alias k=kubectl

kubectl get pods - will list all your pods in a specific node

k edit pod <pod-name> - this will display the pod information in a yaml format

k describe pod <pod-name> - this will give you a discription or detail information of the pod specified

k run ngnix-yaml --image=nginx --dry-run=client -o yaml - this command will create a manifest for pod in the current screen in yaml format



