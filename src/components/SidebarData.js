import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const data = {
  "folders": [
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C001+Basic+Docker+Commands.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C001+Basic+Docker+Commands_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C002+Demo+-+Docker+Commands.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C002+Demo+-+Docker+Commands_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C003+Demo+-+Docker+Labs.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C003+Demo+-+Docker+Labs_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C15+-+Docker+Commands%5C004+Labs+Basic+Docker+Commands+-+Beta.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\001 Basic Docker Commands.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\001 Basic Docker Commands_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\002 Demo - Docker Commands.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\002 Demo - Docker Commands_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\003 Demo - Docker Labs.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\003 Demo - Docker Labs_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands\\004 Labs Basic Docker Commands - Beta.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C16+-+Docker+Run%5C001+Docker+Run.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C16+-+Docker+Run%5C001+Docker+Run_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C16+-+Docker+Run%5C002+Demo+-+Advanced+Docker+Run+Features.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C16+-+Docker+Run%5C002+Demo+-+Advanced+Docker+Run+Features_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C16+-+Docker+Run%5C003+Labs+Docker+Run+Commands.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\16 - Docker Run\\001 Docker Run.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\16 - Docker Run\\001 Docker Run_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\16 - Docker Run\\002 Demo - Advanced Docker Run Features.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\16 - Docker Run\\002 Demo - Advanced Docker Run Features_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\16 - Docker Run\\003 Labs Docker Run Commands.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C001+Docker+Images.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C001+Docker+Images_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C002+Demo+-+Creating+a+new+Docker+Image.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C002+Demo+-+Creating+a+new+Docker+Image_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C003+Labs+Docker+Images.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C004+Environment+Variables.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C004+Environment+Variables_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C005+Labs+-+Environment+Variables.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C006+Commands+vs+Entrypoint.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C006+Commands+vs+Entrypoint_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C17+-+Docker+Images%5C007+Labs+-+Command+vs+Entrypoint.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\001 Docker Images.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\001 Docker Images_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\002 Demo - Creating a new Docker Image.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\002 Demo - Creating a new Docker Image_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\003 Labs Docker Images.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\004 Environment Variables.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\004 Environment Variables_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\005 Labs - Environment Variables.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\006 Commands vs Entrypoint.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\006 Commands vs Entrypoint_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images\\007 Labs - Command vs Entrypoint.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C001+Docker+Engine.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C001+Docker+Engine_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C002+Docker+Storage.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C002+Docker+Storage_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C003+Labs+Docker+Storage.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C004+Docker+Networking.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C004+Docker+Networking_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C18+-+Docker+Engine_Storage+and+Networking%5C005+Labs+Docker+Networking.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\001 Docker Engine.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\001 Docker Engine_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\002 Docker Storage.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\002 Docker Storage_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\003 Labs Docker Storage.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\004 Docker Networking.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\004 Docker Networking_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking\\005 Labs Docker Networking.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C19+-+Docker+Registry%5C001+Docker+Registry.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C19+-+Docker+Registry%5C001+Docker+Registry_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\19 - Docker Registry\\001 Docker Registry.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\19 - Docker Registry\\001 Docker Registry_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C001+Introduction.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C001+Introduction_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C002+Containers+Overview.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C002+Containers+Overview_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C003+Container+Orchestration.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C003+Container+Orchestration_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C004+Kubernetes+Architecture.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C20+-+Kubernetes+Overview%5C004+Kubernetes+Architecture_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\001 Introduction.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\001 Introduction_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\002 Containers Overview.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\002 Containers Overview_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\003 Container Orchestration.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\003 Container Orchestration_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\004 Kubernetes Architecture.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview\\004 Kubernetes Architecture_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C21+-+Setup+Kubernetes%5C001+Kubernetes+Setup+-+Introduction+and+Minikube.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C21+-+Setup+Kubernetes%5C001+Kubernetes+Setup+-+Introduction+and+Minikube_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C21+-+Setup+Kubernetes%5C002+Demo+-+Minikube-Setup.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C21+-+Setup+Kubernetes%5C002+Demo+-+Minikube-Setup_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C21+-+Setup+Kubernetes%5C003+Reference.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\21 - Setup Kubernetes\\001 Kubernetes Setup - Introduction and Minikube.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\21 - Setup Kubernetes\\001 Kubernetes Setup - Introduction and Minikube_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\21 - Setup Kubernetes\\002 Demo - Minikube-Setup.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\21 - Setup Kubernetes\\002 Demo - Minikube-Setup_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\21 - Setup Kubernetes\\003 Reference.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C22+-+Kubernetes+Concepts%5C001+PODs_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C22+-+Kubernetes+Concepts%5C002+Demo+-+PODs_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C22+-+Kubernetes+Concepts%5C003+A+note+about+creating+Pods.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\22 - Kubernetes Concepts\\001 PODs_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\22 - Kubernetes Concepts\\002 Demo - PODs_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\22 - Kubernetes Concepts\\003 A note about creating Pods.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C23+-+YAML+Introduction%5C001+Introduction+to+YAML.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C23+-+YAML+Introduction%5C001+Introduction+to+YAML_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C23+-+YAML+Introduction%5C002+Labs+on+YAML.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\23 - YAML Introduction\\001 Introduction to YAML.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\23 - YAML Introduction\\001 Introduction to YAML_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\23 - YAML Introduction\\002 Labs on YAML.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C001+PODs+with+YAML.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C001+PODs+with+YAML_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C002+Demo+-+PODs+with+YAML.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C002+Demo+-+PODs+with+YAML_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C003+Demo+-+YAML+-+Tips.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C003+Demo+-+YAML+-+Tips_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C004+Labs+PODs+with+YAML.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C005+Lab+Solution.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C005+Lab+Solution_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C006+Replication+Controllers+and+ReplicaSets.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C006+Replication+Controllers+and+ReplicaSets_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C007+Demo+-+ReplicaSets.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C007+Demo+-+ReplicaSets_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C008+Labs+Replica+Sets.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C009+Lab+Solution.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C009+Lab+Solution_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C010+Deployments.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C010+Deployments_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C011+Demo+Deployments.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C011+Demo+Deployments_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C012+Labs+Deployments.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C013+Deployments+-+Update+and+Rollback.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C013+Deployments+-+Update+and+Rollback_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C014+Demo+-+Deployments+-+Update+and+Rollback.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C24+-+Kubernetes+Concepts+-+PODs%2C+ReplicaSets%2C+Deployments%5C014+Demo+-+Deployments+-+Update+and+Rollback_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\001 PODs with YAML.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\001 PODs with YAML_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\002 Demo - PODs with YAML.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\002 Demo - PODs with YAML_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\003 Demo - YAML - Tips.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\003 Demo - YAML - Tips_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\004 Labs PODs with YAML.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\005 Lab Solution.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\005 Lab Solution_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\006 Replication Controllers and ReplicaSets.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\006 Replication Controllers and ReplicaSets_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\007 Demo - ReplicaSets.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\007 Demo - ReplicaSets_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\008 Labs Replica Sets.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\009 Lab Solution.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\009 Lab Solution_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\010 Deployments.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\010 Deployments_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\011 Demo Deployments.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\011 Demo Deployments_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\012 Labs Deployments.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\013 Deployments - Update and Rollback.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\013 Deployments - Update and Rollback_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\014 Demo - Deployments - Update and Rollback.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments\\014 Demo - Deployments - Update and Rollback_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C25+-+Networking+in+Kubernetes%5C001+Basics+of+Networking+in+Kubernetes.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C25+-+Networking+in+Kubernetes%5C001+Basics+of+Networking+in+Kubernetes_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\25 - Networking in Kubernetes\\001 Basics of Networking in Kubernetes.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\25 - Networking in Kubernetes\\001 Basics of Networking in Kubernetes_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C001+Services+-+NodePort.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C001+Services+-+NodePort_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C002+Demo+-+Services.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C002+Demo+-+Services_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C003+Services+-+ClusterIP.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C003+Services+-+ClusterIP_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C004+Services+-+Load+balancer.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C004+Services+-+Load+balancer_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C26+-+Services%5C005+Labs+Services.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\001 Services - NodePort.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\001 Services - NodePort_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\002 Demo - Services.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\002 Demo - Services_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\003 Services - ClusterIP.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\003 Services - ClusterIP_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\004 Services - Load balancer.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\004 Services - Load balancer_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services\\005 Labs Services.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C001+Microservices+Architecture.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C001+Microservices+Architecture_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C002+Deploying+voting+app+on+Kubernetes.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C002+Deploying+voting+app+on+Kubernetes_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C003+Demo+-+Deploying+voting+app+on+Kubernetes.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C003+Demo+-+Deploying+voting+app+on+Kubernetes_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C004+Demo+-+Deploying+voting+app+on+Kubernetes+with+Deployments.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C27+-+Microservices+Architecture%5C004+Demo+-+Deploying+voting+app+on+Kubernetes+with+Deployments_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\001 Microservices Architecture.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\001 Microservices Architecture_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\002 Deploying voting app on Kubernetes.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\002 Deploying voting app on Kubernetes_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\003 Demo - Deploying voting app on Kubernetes.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\003 Demo - Deploying voting app on Kubernetes_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\004 Demo - Deploying voting app on Kubernetes with Deployments.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture\\004 Demo - Deploying voting app on Kubernetes with Deployments_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C001+Introduction.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C001+Introduction_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C002+Ansible+Introduction.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C002+Ansible+Introduction_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C003+Demo+Setup+Ansible+Local+Environment+-+Using+VirtualBox.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C003+Demo+Setup+Ansible+Local+Environment+-+Using+VirtualBox_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C004+Demo+Install+Ansible.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C004+Demo+Install+Ansible_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C005+Understanding+YAML.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C005+Understanding+YAML_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C28+-+Ansible+Introduction+and+Lab+Setup%5C006+Labs+-+YAML.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\001 Introduction.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\001 Introduction_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\002 Ansible Introduction.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\002 Ansible Introduction_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\003 Demo Setup Ansible Local Environment - Using VirtualBox.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\003 Demo Setup Ansible Local Environment - Using VirtualBox_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\004 Demo Install Ansible.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\004 Demo Install Ansible_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\005 Understanding YAML.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\005 Understanding YAML_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup\\006 Labs - YAML.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C001+Ansible+Inventory.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C001+Ansible+Inventory_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C002+Lab+-+Inventory.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C003+Ansible+Playbooks.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C003+Ansible+Playbooks_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C004+Lab+-+Playbooks.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C005+Ansible+Modules.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C005+Ansible+Modules_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C006+Lab+-+Modules.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C007+Ansible+Variables.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C007+Ansible+Variables_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C29+-+Ansible+Concepts%5C008+Lab+-+Variables.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\001 Ansible Inventory.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\001 Ansible Inventory_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\002 Lab - Inventory.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\003 Ansible Playbooks.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\003 Ansible Playbooks_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\004 Lab - Playbooks.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\005 Ansible Modules.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\005 Ansible Modules_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\006 Lab - Modules.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\007 Ansible Variables.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\007 Ansible Variables_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts\\008 Lab - Variables.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C001+Ansible+Conditionals.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C001+Ansible+Conditionals_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C002+Lab+-+Conditionals.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C003+Ansible+Loops.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C003+Ansible+Loops_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C004+Lab+-+Loops.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C005+Ansible+Roles.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C30+-+Ansible+Conditionals%2C+Loops+%26+Roles%5C005+Ansible+Roles_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\001 Ansible Conditionals.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\001 Ansible Conditionals_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\002 Lab - Conditionals.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\003 Ansible Loops.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\003 Ansible Loops_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\004 Lab - Loops.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\005 Ansible Roles.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles\\005 Ansible Roles_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C31+-+Terraform+Introduction%5C001+Course+Introduction.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C31+-+Terraform+Introduction%5C001+Course+Introduction_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\31 - Terraform Introduction\\001 Course Introduction.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\31 - Terraform Introduction\\001 Course Introduction_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C32+-+Introduction+to+Infrastructure+as+Code%5C001+Challenges+with+Traditional+IT+Infrastructure.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C32+-+Introduction+to+Infrastructure+as+Code%5C001+Challenges+with+Traditional+IT+Infrastructure_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C32+-+Introduction+to+Infrastructure+as+Code%5C002+Types+of+IAC+Tools.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C32+-+Introduction+to+Infrastructure+as+Code%5C002+Types+of+IAC+Tools_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C32+-+Introduction+to+Infrastructure+as+Code%5C003+Why+Terraform.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C32+-+Introduction+to+Infrastructure+as+Code%5C003+Why+Terraform_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code\\001 Challenges with Traditional IT Infrastructure.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code\\001 Challenges with Traditional IT Infrastructure_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code\\002 Types of IAC Tools.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code\\002 Types of IAC Tools_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code\\003 Why Terraform.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code\\003 Why Terraform_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C001+Installing+Terraform.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C001+Installing+Terraform_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C002+HashiCorp+Configuraton+Language+%28HCL%29+Basics.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C002+HashiCorp+Configuraton+Language+%28HCL%29+Basics_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C003+Update+and+Destroy+Infrastructure.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C003+Update+and+Destroy+Infrastructure_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C33+-+Getting+Started+with+Terraform%5C004+Lab+HCL+Basics.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\001 Installing Terraform.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\001 Installing Terraform_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\002 HashiCorp Configuraton Language (HCL) Basics.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\002 HashiCorp Configuraton Language (HCL) Basics_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\003 Update and Destroy Infrastructure.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\003 Update and Destroy Infrastructure_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform\\004 Lab HCL Basics.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C001+Using+Terraform+Providers.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C001+Using+Terraform+Providers_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C002+Lab+Terraform+Providers.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C003+Configuration+Directory.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C003+Configuration+Directory_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C004+Multiple+Providers.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C004+Multiple+Providers_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C005+Lab+Multiple+Providers.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C006+Using+Input+Variables.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C006+Using+Input+Variables_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C007+Understanding+the+Variable+Block.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C007+Understanding+the+Variable+Block_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C008+Lab+Variables.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C009+Using+Variables+in+Terraform.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C009+Using+Variables+in+Terraform_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C010+Lab+Using+Variables+in+terraform.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C011+Resource+Attributes.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C011+Resource+Attributes_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C012+Lab+Resource+Attributes.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C013+Resource+Dependencies.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C013+Resource+Dependencies_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C014+Lab+Resource+Dependencies.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C015+Output+Variables.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C015+Output+Variables_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C34+-+Terraform+Basics%5C016+Lab+Output+Variables.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\001 Using Terraform Providers.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\001 Using Terraform Providers_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\002 Lab Terraform Providers.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\003 Configuration Directory.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\003 Configuration Directory_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\004 Multiple Providers.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\004 Multiple Providers_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\005 Lab Multiple Providers.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\006 Using Input Variables.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\006 Using Input Variables_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\007 Understanding the Variable Block.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\007 Understanding the Variable Block_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\008 Lab Variables.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\009 Using Variables in Terraform.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\009 Using Variables in Terraform_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\010 Lab Using Variables in terraform.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\011 Resource Attributes.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\011 Resource Attributes_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\012 Lab Resource Attributes.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\013 Resource Dependencies.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\013 Resource Dependencies_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\014 Lab Resource Dependencies.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\015 Output Variables.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\015 Output Variables_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics\\016 Lab Output Variables.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C001+Introduction+to+Terraform+State.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C001+Introduction+to+Terraform+State_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C002+Purpose+of+State.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C002+Purpose+of+State_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C003+Lab+terraform+State.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C004+Terraform+State+Considerations.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C35+-+Terraform+State%5C004+Terraform+State+Considerations_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\001 Introduction to Terraform State.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\001 Introduction to Terraform State_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\002 Purpose of State.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\002 Purpose of State_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\003 Lab terraform State.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\004 Terraform State Considerations.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State\\004 Terraform State Considerations_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C001+Terraform+Commands.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C001+Terraform+Commands_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C002+Lab+Terraform+Commands.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C003+Mutable+vs+Immutable+Infrastructure.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C003+Mutable+vs+Immutable+Infrastructure_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C004+LifeCycle+Rules.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C004+LifeCycle+Rules_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C005+Lab+Lifecycle+Rules.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C006+Datasources.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C006+Datasources_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C007+Lab+Datasources.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C008+Meta-Arguments.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C008+Meta-Arguments_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C009+Count.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C009+Count_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C010+for-each.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C010+for-each_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C011+Lab+Count+and+for+each.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C012+Version+Constraints.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C012+Version+Constraints_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C36+-+Working+with+Terraform%5C013+Lab+Version+Constraints.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\001 Terraform Commands.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\001 Terraform Commands_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\002 Lab Terraform Commands.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\003 Mutable vs Immutable Infrastructure.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\003 Mutable vs Immutable Infrastructure_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\004 LifeCycle Rules.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\004 LifeCycle Rules_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\005 Lab Lifecycle Rules.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\006 Datasources.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\006 Datasources_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\007 Lab Datasources.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\008 Meta-Arguments.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\008 Meta-Arguments_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\009 Count.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\009 Count_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\010 for-each.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\010 for-each_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\011 Lab Count and for each.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\012 Version Constraints.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\012 Version Constraints_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform\\013 Lab Version Constraints.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C37+-+Python+-+Introduction%5C001+Course+Introduction.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C37+-+Python+-+Introduction%5C001+Course+Introduction_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C37+-+Python+-+Introduction%5C002+Objectives.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C37+-+Python+-+Introduction%5C002+Objectives_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\37 - Python - Introduction\\001 Course Introduction.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\37 - Python - Introduction\\001 Course Introduction_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\37 - Python - Introduction\\002 Objectives.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\37 - Python - Introduction\\002 Objectives_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C001+Print+Function.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C001+Print+Function_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C003+Literals.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C003+Literals_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C004+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C005+Operators.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C005+Operators_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C006+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C007+Variables.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C007+Variables_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C008+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C009+Comments.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C009+Comments_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C010+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C011+Input.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C011+Input_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C012+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C013+String+Methods.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C013+String+Methods_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C38+-+Python+-+Basics%5C014+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\001 Print Function.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\001 Print Function_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\003 Literals.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\003 Literals_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\004 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\005 Operators.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\005 Operators_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\006 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\007 Variables.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\007 Variables_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\008 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\009 Comments.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\009 Comments_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\010 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\011 Input.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\011 Input_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\012 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\013 String Methods.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\013 String Methods_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics\\014 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C39+-+Python+-+Making+Decisions%5C001+Comparison+Operators.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C39+-+Python+-+Making+Decisions%5C001+Comparison+Operators_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C39+-+Python+-+Making+Decisions%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C39+-+Python+-+Making+Decisions%5C003+Conditional+Statements.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C39+-+Python+-+Making+Decisions%5C003+Conditional+Statements_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C39+-+Python+-+Making+Decisions%5C004+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions\\001 Comparison Operators.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions\\001 Comparison Operators_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions\\003 Conditional Statements.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions\\003 Conditional Statements_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions\\004 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C40+-+Python+-+Loops%5C001+Loops+-+while.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C40+-+Python+-+Loops%5C001+Loops+-+while_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C40+-+Python+-+Loops%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C40+-+Python+-+Loops%5C003+Loops+-+for.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C40+-+Python+-+Loops%5C003+Loops+-+for_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C40+-+Python+-+Loops%5C004+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops\\001 Loops - while.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops\\001 Loops - while_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops\\003 Loops - for.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops\\003 Loops - for_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops\\004 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C41+-+Python+-+Logic+and+Bit+Operations%5C001+Operators.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C41+-+Python+-+Logic+and+Bit+Operations%5C001+Operators_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C41+-+Python+-+Logic+and+Bit+Operations%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C41+-+Python+-+Logic+and+Bit+Operations%5C003+Bitwise+Operators.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C41+-+Python+-+Logic+and+Bit+Operations%5C003+Bitwise+Operators_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C41+-+Python+-+Logic+and+Bit+Operations%5C004+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations\\001 Operators.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations\\001 Operators_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations\\003 Bitwise Operators.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations\\003 Bitwise Operators_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations\\004 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C001+Lists.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C001+Lists_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C003+Lists+-+Methods.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C003+Lists+-+Methods_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C004+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C005+Iterating+Lists.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C005+Iterating+Lists_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C006+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C007+Understanding+Lists.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C007+Understanding+Lists_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C008+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C009+Slicing+Lists.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C009+Slicing+Lists_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C010+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C011+Finding+in+Lists.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C011+Finding+in+Lists_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C012+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C013+Nested+Lists+-+2D.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C013+Nested+Lists+-+2D_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C014+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C015+Nested+Lists+-+3D.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C015+Nested+Lists+-+3D_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C42+-+Python+-+Lists%5C016+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\001 Lists.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\001 Lists_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\003 Lists - Methods.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\003 Lists - Methods_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\004 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\005 Iterating Lists.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\005 Iterating Lists_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\006 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\007 Understanding Lists.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\007 Understanding Lists_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\008 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\009 Slicing Lists.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\009 Slicing Lists_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\010 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\011 Finding in Lists.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\011 Finding in Lists_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\012 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\013 Nested Lists - 2D.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\013 Nested Lists - 2D_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\014 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\015 Nested Lists - 3D.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\015 Nested Lists - 3D_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists\\016 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C001+Functions.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C001+Functions_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C003+Arguments.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C003+Arguments_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C004+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C005+Return+Statement.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C005+Return+Statement_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C006+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C007+List+as+Argument.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C007+List+as+Argument_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C008+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C009+Scopes.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C009+Scopes_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C010+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C011+Arguments+Explained.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C011+Arguments+Explained_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C43+-+Python+-+Functions%5C012+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\001 Functions.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\001 Functions_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\003 Arguments.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\003 Arguments_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\004 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\005 Return Statement.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\005 Return Statement_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\006 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\007 List as Argument.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\007 List as Argument_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\008 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\009 Scopes.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\009 Scopes_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\010 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\011 Arguments Explained.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\011 Arguments Explained_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions\\012 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C44+-+Python+-+Tuples+%26+Dictionaries%5C001+Tuples.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C44+-+Python+-+Tuples+%26+Dictionaries%5C001+Tuples_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C44+-+Python+-+Tuples+%26+Dictionaries%5C002+Test+your+knowledge.html",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C44+-+Python+-+Tuples+%26+Dictionaries%5C003+Dictionaries.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C44+-+Python+-+Tuples+%26+Dictionaries%5C003+Dictionaries_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C44+-+Python+-+Tuples+%26+Dictionaries%5C004+Test+your+knowledge.html"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries\\001 Tuples.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries\\001 Tuples_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries\\002 Test your knowledge.html",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries\\003 Dictionaries.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries\\003 Dictionaries_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries\\004 Test your knowledge.html"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C001+Virtual+Box.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C001+Virtual+Box_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C002+Demo+-+Install+VirtualBox+on+MacOS.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C002+Demo+-+Install+VirtualBox+on+MacOS_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C003+Demo+-+Install+VirtualBox+on+Windows.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C003+Demo+-+Install+VirtualBox+on+Windows_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C004+Virtual+Box+Connectivity.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C004+Virtual+Box+Connectivity_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C005+Demo+-+Connecting+to+VM+on+Mac.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C005+Demo+-+Connecting+to+VM+on+Mac_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C006+Demo+-+Connecting+to+VM+on+Windows.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C006+Demo+-+Connecting+to+VM+on+Windows_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C007+Virtual+Box+Networking.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C007+Virtual+Box+Networking_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C008+Demo+-+Multiple+VMs+%26+Networking.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C008+Demo+-+Multiple+VMs+%26+Networking_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C009+Vagrant.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C009+Vagrant_en.srt",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C010+Demo+-+Vagrant.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C45+-+Lab+Setup%5C010+Demo+-+Vagrant_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\001 Virtual Box.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\001 Virtual Box_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\002 Demo - Install VirtualBox on MacOS.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\002 Demo - Install VirtualBox on MacOS_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\003 Demo - Install VirtualBox on Windows.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\003 Demo - Install VirtualBox on Windows_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\004 Virtual Box Connectivity.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\004 Virtual Box Connectivity_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\005 Demo - Connecting to VM on Mac.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\005 Demo - Connecting to VM on Mac_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\006 Demo - Connecting to VM on Windows.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\006 Demo - Connecting to VM on Windows_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\007 Virtual Box Networking.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\007 Virtual Box Networking_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\008 Demo - Multiple VMs & Networking.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\008 Demo - Multiple VMs & Networking_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\009 Vagrant.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\009 Vagrant_en.srt",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\010 Demo - Vagrant.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup\\010 Demo - Vagrant_en.srt"
      ]
    },
    {
      "folders": [],
      "encodedUrls": [
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C46+-+Conclusion%5C001+Conclusion.mp4",
        "C%3A%5CUsers%5Cnagen%5CDownloads%5C%5BFreeCourseSite.com%5D+Udemy+-+The+Ultimate+DevOps+Bootcamp+-+2023%5C46+-+Conclusion%5C001+Conclusion_en.srt"
      ],
      "files": [
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\46 - Conclusion\\001 Conclusion.mp4",
        "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\46 - Conclusion\\001 Conclusion_en.srt"
      ]
    }
  ],
  "encodedUrls": [
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\15 - Docker Commands",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\16 - Docker Run",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\17 - Docker Images",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\18 - Docker Engine_Storage and Networking",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\19 - Docker Registry",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\20 - Kubernetes Overview",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\21 - Setup Kubernetes",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\22 - Kubernetes Concepts",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\23 - YAML Introduction",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\24 - Kubernetes Concepts - PODs, ReplicaSets, Deployments",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\25 - Networking in Kubernetes",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\26 - Services",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\27 - Microservices Architecture",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\28 - Ansible Introduction and Lab Setup",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\29 - Ansible Concepts",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\30 - Ansible Conditionals, Loops & Roles",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\31 - Terraform Introduction",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\32 - Introduction to Infrastructure as Code",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\33 - Getting Started with Terraform",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\34 - Terraform Basics",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\35 - Terraform State",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\36 - Working with Terraform",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\37 - Python - Introduction",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\38 - Python - Basics",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\39 - Python - Making Decisions",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\40 - Python - Loops",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\41 - Python - Logic and Bit Operations",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\42 - Python - Lists",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\43 - Python - Functions",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\44 - Python - Tuples & Dictionaries",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\45 - Lab Setup",
    "C:\\Users\\nagen\\Downloads\\[FreeCourseSite.com] Udemy - The Ultimate DevOps Bootcamp - 2023\\46 - Conclusion"
  ],
  "files": []
}


export const SidebarData = data["folders"].map((folder, index) => {
  const fileName = data['encodedUrls'][index];
  const lastIndex = fileName.lastIndexOf("\\");
  const folderName = fileName.substring(lastIndex);
  const subNavs = [];
  for (let i = 0; i < folder['files'].length; i++) {
    const file = folder['files'][i];
    const encodedPath = folder['encodedUrls'][i];
    const lastIndex = file.lastIndexOf("\\");
    const fileName = file.substring(lastIndex);
    if (!fileName.endsWith(".srt") ) {
      let icon = "";
      if (fileName.endsWith(".mp4")){
        icon = <FaIcons.FaVideo />
      }
      else if(fileName.endsWith(".html")) {
        icon = <FaIcons.FaHtml5 />
      }

      subNavs.push({
        title: fileName, 
        path: encodedPath, 
        icon: icon
      })
    }
  }
  return {
    title: folderName,
    subNav: subNavs,
    icon: <AiIcons.AiOutlineFolder />

  }
})
