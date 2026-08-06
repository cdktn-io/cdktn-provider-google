/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { ContainerClusterAddonsConfig, 
containerClusterAddonsConfigToTerraform, 
containerClusterAddonsConfigToHclTerraform, 
ContainerClusterAddonsConfigOutputReference, 
ContainerClusterAnonymousAuthenticationConfig, 
containerClusterAnonymousAuthenticationConfigToTerraform, 
containerClusterAnonymousAuthenticationConfigToHclTerraform, 
ContainerClusterAnonymousAuthenticationConfigOutputReference, 
ContainerClusterAuthenticatorGroupsConfig, 
containerClusterAuthenticatorGroupsConfigToTerraform, 
containerClusterAuthenticatorGroupsConfigToHclTerraform, 
ContainerClusterAuthenticatorGroupsConfigOutputReference, 
ContainerClusterAutopilotClusterPolicyConfig, 
containerClusterAutopilotClusterPolicyConfigToTerraform, 
containerClusterAutopilotClusterPolicyConfigToHclTerraform, 
ContainerClusterAutopilotClusterPolicyConfigOutputReference, 
ContainerClusterBinaryAuthorization, 
containerClusterBinaryAuthorizationToTerraform, 
containerClusterBinaryAuthorizationToHclTerraform, 
ContainerClusterBinaryAuthorizationOutputReference, 
ContainerClusterClusterAutoscaling, 
containerClusterClusterAutoscalingToTerraform, 
containerClusterClusterAutoscalingToHclTerraform, 
ContainerClusterClusterAutoscalingOutputReference, 
ContainerClusterConfidentialNodes, 
containerClusterConfidentialNodesToTerraform, 
containerClusterConfidentialNodesToHclTerraform, 
ContainerClusterConfidentialNodesOutputReference, 
ContainerClusterControlPlaneEndpointsConfig, 
containerClusterControlPlaneEndpointsConfigToTerraform, 
containerClusterControlPlaneEndpointsConfigToHclTerraform, 
ContainerClusterControlPlaneEndpointsConfigOutputReference, 
ContainerClusterCostManagementConfig, 
containerClusterCostManagementConfigToTerraform, 
containerClusterCostManagementConfigToHclTerraform, 
ContainerClusterCostManagementConfigOutputReference, 
ContainerClusterDatabaseEncryption, 
containerClusterDatabaseEncryptionToTerraform, 
containerClusterDatabaseEncryptionToHclTerraform, 
ContainerClusterDatabaseEncryptionOutputReference, 
ContainerClusterDefaultSnatStatus, 
containerClusterDefaultSnatStatusToTerraform, 
containerClusterDefaultSnatStatusToHclTerraform, 
ContainerClusterDefaultSnatStatusOutputReference, 
ContainerClusterDnsConfig, 
containerClusterDnsConfigToTerraform, 
containerClusterDnsConfigToHclTerraform, 
ContainerClusterDnsConfigOutputReference, 
ContainerClusterEnableK8SBetaApis, 
containerClusterEnableK8SBetaApisToTerraform, 
containerClusterEnableK8SBetaApisToHclTerraform, 
ContainerClusterEnableK8SBetaApisOutputReference, 
ContainerClusterEnterpriseConfig, 
containerClusterEnterpriseConfigToTerraform, 
containerClusterEnterpriseConfigToHclTerraform, 
ContainerClusterEnterpriseConfigOutputReference, 
ContainerClusterFleet, 
containerClusterFleetToTerraform, 
containerClusterFleetToHclTerraform, 
ContainerClusterFleetOutputReference, 
ContainerClusterGatewayApiConfig, 
containerClusterGatewayApiConfigToTerraform, 
containerClusterGatewayApiConfigToHclTerraform, 
ContainerClusterGatewayApiConfigOutputReference, 
ContainerClusterGkeAutoUpgradeConfig, 
containerClusterGkeAutoUpgradeConfigToTerraform, 
containerClusterGkeAutoUpgradeConfigToHclTerraform, 
ContainerClusterGkeAutoUpgradeConfigOutputReference, 
ContainerClusterIdentityServiceConfig, 
containerClusterIdentityServiceConfigToTerraform, 
containerClusterIdentityServiceConfigToHclTerraform, 
ContainerClusterIdentityServiceConfigOutputReference, 
ContainerClusterIpAllocationPolicy, 
containerClusterIpAllocationPolicyToTerraform, 
containerClusterIpAllocationPolicyToHclTerraform, 
ContainerClusterIpAllocationPolicyOutputReference, 
ContainerClusterLoggingConfig, 
containerClusterLoggingConfigToTerraform, 
containerClusterLoggingConfigToHclTerraform, 
ContainerClusterLoggingConfigOutputReference, 
ContainerClusterMaintenancePolicy, 
containerClusterMaintenancePolicyToTerraform, 
containerClusterMaintenancePolicyToHclTerraform, 
ContainerClusterMaintenancePolicyOutputReference, 
ContainerClusterMasterAuth, 
containerClusterMasterAuthToTerraform, 
containerClusterMasterAuthToHclTerraform, 
ContainerClusterMasterAuthOutputReference, 
ContainerClusterMasterAuthorizedNetworksConfig, 
containerClusterMasterAuthorizedNetworksConfigToTerraform, 
containerClusterMasterAuthorizedNetworksConfigToHclTerraform, 
ContainerClusterMasterAuthorizedNetworksConfigOutputReference, 
ContainerClusterMeshCertificates, 
containerClusterMeshCertificatesToTerraform, 
containerClusterMeshCertificatesToHclTerraform, 
ContainerClusterMeshCertificatesOutputReference, 
ContainerClusterMonitoringConfig, 
containerClusterMonitoringConfigToTerraform, 
containerClusterMonitoringConfigToHclTerraform, 
ContainerClusterMonitoringConfigOutputReference, 
ContainerClusterNetworkPerformanceConfig, 
containerClusterNetworkPerformanceConfigToTerraform, 
containerClusterNetworkPerformanceConfigToHclTerraform, 
ContainerClusterNetworkPerformanceConfigOutputReference, 
ContainerClusterNetworkPolicy, 
containerClusterNetworkPolicyToTerraform, 
containerClusterNetworkPolicyToHclTerraform, 
ContainerClusterNetworkPolicyOutputReference, 
ContainerClusterNodeConfig, 
containerClusterNodeConfigToTerraform, 
containerClusterNodeConfigToHclTerraform, 
ContainerClusterNodeConfigOutputReference, 
ContainerClusterNodeCreationConfig, 
containerClusterNodeCreationConfigToTerraform, 
containerClusterNodeCreationConfigToHclTerraform, 
ContainerClusterNodeCreationConfigOutputReference, 
ContainerClusterNodePool, 
containerClusterNodePoolToTerraform, 
containerClusterNodePoolToHclTerraform, 
ContainerClusterNodePoolList, 
ContainerClusterNodePoolAutoConfig, 
containerClusterNodePoolAutoConfigToTerraform, 
containerClusterNodePoolAutoConfigToHclTerraform, 
ContainerClusterNodePoolAutoConfigOutputReference, 
ContainerClusterNodePoolDefaults, 
containerClusterNodePoolDefaultsToTerraform, 
containerClusterNodePoolDefaultsToHclTerraform, 
ContainerClusterNodePoolDefaultsOutputReference, 
ContainerClusterNotificationConfig, 
containerClusterNotificationConfigToTerraform, 
containerClusterNotificationConfigToHclTerraform, 
ContainerClusterNotificationConfigOutputReference, 
ContainerClusterPodAutoscaling, 
containerClusterPodAutoscalingToTerraform, 
containerClusterPodAutoscalingToHclTerraform, 
ContainerClusterPodAutoscalingOutputReference, 
ContainerClusterPrivateClusterConfig, 
containerClusterPrivateClusterConfigToTerraform, 
containerClusterPrivateClusterConfigToHclTerraform, 
ContainerClusterPrivateClusterConfigOutputReference, 
ContainerClusterRbacBindingConfig, 
containerClusterRbacBindingConfigToTerraform, 
containerClusterRbacBindingConfigToHclTerraform, 
ContainerClusterRbacBindingConfigOutputReference, 
ContainerClusterReleaseChannel, 
containerClusterReleaseChannelToTerraform, 
containerClusterReleaseChannelToHclTerraform, 
ContainerClusterReleaseChannelOutputReference, 
ContainerClusterResourceUsageExportConfig, 
containerClusterResourceUsageExportConfigToTerraform, 
containerClusterResourceUsageExportConfigToHclTerraform, 
ContainerClusterResourceUsageExportConfigOutputReference, 
ContainerClusterRollbackSafeUpgrade, 
containerClusterRollbackSafeUpgradeToTerraform, 
containerClusterRollbackSafeUpgradeToHclTerraform, 
ContainerClusterRollbackSafeUpgradeOutputReference, 
ContainerClusterSecretManagerConfig, 
containerClusterSecretManagerConfigToTerraform, 
containerClusterSecretManagerConfigToHclTerraform, 
ContainerClusterSecretManagerConfigOutputReference, 
ContainerClusterSecretSyncConfig, 
containerClusterSecretSyncConfigToTerraform, 
containerClusterSecretSyncConfigToHclTerraform, 
ContainerClusterSecretSyncConfigOutputReference, 
ContainerClusterSecurityPostureConfig, 
containerClusterSecurityPostureConfigToTerraform, 
containerClusterSecurityPostureConfigToHclTerraform, 
ContainerClusterSecurityPostureConfigOutputReference, 
ContainerClusterServiceExternalIpsConfig, 
containerClusterServiceExternalIpsConfigToTerraform, 
containerClusterServiceExternalIpsConfigToHclTerraform, 
ContainerClusterServiceExternalIpsConfigOutputReference, 
ContainerClusterTimeouts, 
containerClusterTimeoutsToTerraform, 
containerClusterTimeoutsToHclTerraform, 
ContainerClusterTimeoutsOutputReference, 
ContainerClusterUserManagedKeysConfig, 
containerClusterUserManagedKeysConfigToTerraform, 
containerClusterUserManagedKeysConfigToHclTerraform, 
ContainerClusterUserManagedKeysConfigOutputReference, 
ContainerClusterVerticalPodAutoscaling, 
containerClusterVerticalPodAutoscalingToTerraform, 
containerClusterVerticalPodAutoscalingToHclTerraform, 
ContainerClusterVerticalPodAutoscalingOutputReference, 
ContainerClusterWorkloadIdentityConfig, 
containerClusterWorkloadIdentityConfigToTerraform, 
containerClusterWorkloadIdentityConfigToHclTerraform, 
ContainerClusterWorkloadIdentityConfigOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface ContainerClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Enable NET_ADMIN for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#allow_net_admin ContainerCluster#allow_net_admin}
  */
  readonly allowNetAdmin?: boolean | cdktn.IResolvable;
  /**
  * The customer allowlist Cloud Storage paths for the cluster. These paths are used with the `--autopilot-privileged-admission` flag to authorize privileged workloads in Autopilot clusters. To allow default partner allowlists, set to []. To allow no allowlists, set to [""].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#autopilot_privileged_admission ContainerCluster#autopilot_privileged_admission}
  */
  readonly autopilotPrivilegedAdmission?: string[];
  /**
  * The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#cluster_ipv4_cidr ContainerCluster#cluster_ipv4_cidr}
  */
  readonly clusterIpv4Cidr?: string;
  /**
  * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#datapath_provider ContainerCluster#datapath_provider}
  */
  readonly datapathProvider?: string;
  /**
  * The desired dataplane optimization mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#dataplane_optimization_mode ContainerCluster#dataplane_optimization_mode}
  */
  readonly dataplaneOptimizationMode?: string;
  /**
  * The default maximum number of pods per node in this cluster. This doesn't work on "routes-based" clusters, clusters that don't have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#default_max_pods_per_node ContainerCluster#default_max_pods_per_node}
  */
  readonly defaultMaxPodsPerNode?: number;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#deletion_policy ContainerCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the cluster will fail. When the field is set to false, deleting the cluster is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#deletion_protection ContainerCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  *  Description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#description ContainerCluster#description}
  */
  readonly description?: string;
  /**
  * The desired emulated version for the cluster. Used to complete a rollback-safe upgrade after a soak period. Must be in major.minor format (e.g., "1.31"). To complete the upgrade declaratively, set this field to the target minor version. Removing this field from your configuration will not trigger completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#desired_emulated_version ContainerCluster#desired_emulated_version}
  */
  readonly desiredEmulatedVersion?: string;
  /**
  * Disable L4 load balancer VPC firewalls to enable firewall policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#disable_l4_lb_firewall_reconciliation ContainerCluster#disable_l4_lb_firewall_reconciliation}
  */
  readonly disableL4LbFirewallReconciliation?: boolean | cdktn.IResolvable;
  /**
  * Enable Autopilot for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_autopilot ContainerCluster#enable_autopilot}
  */
  readonly enableAutopilot?: boolean | cdktn.IResolvable;
  /**
  * Whether Cilium cluster-wide network policy is enabled on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_cilium_clusterwide_network_policy ContainerCluster#enable_cilium_clusterwide_network_policy}
  */
  readonly enableCiliumClusterwideNetworkPolicy?: boolean | cdktn.IResolvable;
  /**
  * Whether FQDN Network Policy is enabled on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_fqdn_network_policy ContainerCluster#enable_fqdn_network_policy}
  */
  readonly enableFqdnNetworkPolicy?: boolean | cdktn.IResolvable;
  /**
  * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_intranode_visibility ContainerCluster#enable_intranode_visibility}
  */
  readonly enableIntranodeVisibility?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_kubernetes_alpha ContainerCluster#enable_kubernetes_alpha}
  */
  readonly enableKubernetesAlpha?: boolean | cdktn.IResolvable;
  /**
  * Whether L4ILB Subsetting is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_l4_ilb_subsetting ContainerCluster#enable_l4_ilb_subsetting}
  */
  readonly enableL4IlbSubsetting?: boolean | cdktn.IResolvable;
  /**
  * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_legacy_abac ContainerCluster#enable_legacy_abac}
  */
  readonly enableLegacyAbac?: boolean | cdktn.IResolvable;
  /**
  * Whether multi-networking is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_multi_networking ContainerCluster#enable_multi_networking}
  */
  readonly enableMultiNetworking?: boolean | cdktn.IResolvable;
  /**
  * Enable Shielded Nodes features on all nodes in this cluster. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_shielded_nodes ContainerCluster#enable_shielded_nodes}
  */
  readonly enableShieldedNodes?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable Cloud TPU resources in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_tpu ContainerCluster#enable_tpu}
  */
  readonly enableTpu?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#id ContainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, the provider ignores external changes (drift) to the node count by skipping GCE API queries to the Instance Group Managers. This is a performance optimization for large clusters that saves API quota. Setting this to true will result in missing managed_instance_group_urls in the state for all node pools in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#ignore_node_count_changes ContainerCluster#ignore_node_count_changes}
  */
  readonly ignoreNodeCountChanges?: boolean | cdktn.IResolvable;
  /**
  * Defines the config of in-transit encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#in_transit_encryption_config ContainerCluster#in_transit_encryption_config}
  */
  readonly inTransitEncryptionConfig?: string;
  /**
  * The number of nodes to create in this cluster's default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you're using google_container_node_pool objects with no default node pool, you'll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#initial_node_count ContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#location ContainerCluster#location}
  */
  readonly location?: string;
  /**
  * The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#logging_service ContainerCluster#logging_service}
  */
  readonly loggingService?: string;
  /**
  * The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#min_master_version ContainerCluster#min_master_version}
  */
  readonly minMasterVersion?: string;
  /**
  * The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#monitoring_service ContainerCluster#monitoring_service}
  */
  readonly monitoringService?: string;
  /**
  * The name of the cluster, unique within the project and location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#name ContainerCluster#name}
  */
  readonly name: string;
  /**
  * The name or self_link of the Google Compute Engine network to which the cluster is connected. For Shared VPC, set this to the self link of the shared network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#network ContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Determines whether alias IPs or routes will be used for pod IPs in the cluster. Defaults to VPC_NATIVE for new clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#networking_mode ContainerCluster#networking_mode}
  */
  readonly networkingMode?: string;
  /**
  * The list of zones in which the cluster's nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster's zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_locations ContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version on the nodes. Must either be unset or set to the same value as min_master_version on create. Defaults to the default version set by GKE which is not necessarily the latest version. This only affects nodes in the default node pool. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. To update nodes in other node pools, use the version attribute on the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_version ContainerCluster#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#private_ipv6_google_access ContainerCluster#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#project ContainerCluster#project}
  */
  readonly project?: string;
  /**
  * If true, deletes the default node pool upon cluster creation. If you're using google_container_node_pool resources with no default node pool, this should be set to true, alongside setting initial_node_count to at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#remove_default_node_pool ContainerCluster#remove_default_node_pool}
  */
  readonly removeDefaultNodePool?: boolean | cdktn.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * If true, the provider will not refresh the inline node_pool state from the API during cluster reads. Set this to true only when all node pools are managed via separate google_container_node_pool resources; it substantially improves plan/apply performance on clusters with a high node pool count. Must not be set to true when inline node_pool blocks are defined on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#skip_node_pool_refresh ContainerCluster#skip_node_pool_refresh}
  */
  readonly skipNodePoolRefresh?: boolean | cdktn.IResolvable;
  /**
  * The name or self_link of the Google Compute Engine subnetwork in which the cluster's instances are launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#addons_config ContainerCluster#addons_config}
  */
  readonly addonsConfig?: ContainerClusterAddonsConfig;
  /**
  * anonymous_authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#anonymous_authentication_config ContainerCluster#anonymous_authentication_config}
  */
  readonly anonymousAuthenticationConfig?: ContainerClusterAnonymousAuthenticationConfig;
  /**
  * authenticator_groups_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#authenticator_groups_config ContainerCluster#authenticator_groups_config}
  */
  readonly authenticatorGroupsConfig?: ContainerClusterAuthenticatorGroupsConfig;
  /**
  * autopilot_cluster_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#autopilot_cluster_policy_config ContainerCluster#autopilot_cluster_policy_config}
  */
  readonly autopilotClusterPolicyConfig?: ContainerClusterAutopilotClusterPolicyConfig;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#binary_authorization ContainerCluster#binary_authorization}
  */
  readonly binaryAuthorization?: ContainerClusterBinaryAuthorization;
  /**
  * cluster_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#cluster_autoscaling ContainerCluster#cluster_autoscaling}
  */
  readonly clusterAutoscaling?: ContainerClusterClusterAutoscaling;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#confidential_nodes ContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerClusterConfidentialNodes;
  /**
  * control_plane_endpoints_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#control_plane_endpoints_config ContainerCluster#control_plane_endpoints_config}
  */
  readonly controlPlaneEndpointsConfig?: ContainerClusterControlPlaneEndpointsConfig;
  /**
  * cost_management_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#cost_management_config ContainerCluster#cost_management_config}
  */
  readonly costManagementConfig?: ContainerClusterCostManagementConfig;
  /**
  * database_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#database_encryption ContainerCluster#database_encryption}
  */
  readonly databaseEncryption?: ContainerClusterDatabaseEncryption;
  /**
  * default_snat_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#default_snat_status ContainerCluster#default_snat_status}
  */
  readonly defaultSnatStatus?: ContainerClusterDefaultSnatStatus;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#dns_config ContainerCluster#dns_config}
  */
  readonly dnsConfig?: ContainerClusterDnsConfig;
  /**
  * enable_k8s_beta_apis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enable_k8s_beta_apis ContainerCluster#enable_k8s_beta_apis}
  */
  readonly enableK8SBetaApis?: ContainerClusterEnableK8SBetaApis;
  /**
  * enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#enterprise_config ContainerCluster#enterprise_config}
  */
  readonly enterpriseConfig?: ContainerClusterEnterpriseConfig;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#fleet ContainerCluster#fleet}
  */
  readonly fleet?: ContainerClusterFleet;
  /**
  * gateway_api_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#gateway_api_config ContainerCluster#gateway_api_config}
  */
  readonly gatewayApiConfig?: ContainerClusterGatewayApiConfig;
  /**
  * gke_auto_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#gke_auto_upgrade_config ContainerCluster#gke_auto_upgrade_config}
  */
  readonly gkeAutoUpgradeConfig?: ContainerClusterGkeAutoUpgradeConfig;
  /**
  * identity_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#identity_service_config ContainerCluster#identity_service_config}
  */
  readonly identityServiceConfig?: ContainerClusterIdentityServiceConfig;
  /**
  * ip_allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#ip_allocation_policy ContainerCluster#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: ContainerClusterIpAllocationPolicy;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#logging_config ContainerCluster#logging_config}
  */
  readonly loggingConfig?: ContainerClusterLoggingConfig;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#maintenance_policy ContainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: ContainerClusterMaintenancePolicy;
  /**
  * master_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#master_auth ContainerCluster#master_auth}
  */
  readonly masterAuth?: ContainerClusterMasterAuth;
  /**
  * master_authorized_networks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#master_authorized_networks_config ContainerCluster#master_authorized_networks_config}
  */
  readonly masterAuthorizedNetworksConfig?: ContainerClusterMasterAuthorizedNetworksConfig;
  /**
  * mesh_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#mesh_certificates ContainerCluster#mesh_certificates}
  */
  readonly meshCertificates?: ContainerClusterMeshCertificates;
  /**
  * monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#monitoring_config ContainerCluster#monitoring_config}
  */
  readonly monitoringConfig?: ContainerClusterMonitoringConfig;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#network_performance_config ContainerCluster#network_performance_config}
  */
  readonly networkPerformanceConfig?: ContainerClusterNetworkPerformanceConfig;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#network_policy ContainerCluster#network_policy}
  */
  readonly networkPolicy?: ContainerClusterNetworkPolicy;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_config ContainerCluster#node_config}
  */
  readonly nodeConfig?: ContainerClusterNodeConfig;
  /**
  * node_creation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_creation_config ContainerCluster#node_creation_config}
  */
  readonly nodeCreationConfig?: ContainerClusterNodeCreationConfig;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_pool ContainerCluster#node_pool}
  */
  readonly nodePool?: ContainerClusterNodePool[] | cdktn.IResolvable;
  /**
  * node_pool_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_pool_auto_config ContainerCluster#node_pool_auto_config}
  */
  readonly nodePoolAutoConfig?: ContainerClusterNodePoolAutoConfig;
  /**
  * node_pool_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#node_pool_defaults ContainerCluster#node_pool_defaults}
  */
  readonly nodePoolDefaults?: ContainerClusterNodePoolDefaults;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#notification_config ContainerCluster#notification_config}
  */
  readonly notificationConfig?: ContainerClusterNotificationConfig;
  /**
  * pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#pod_autoscaling ContainerCluster#pod_autoscaling}
  */
  readonly podAutoscaling?: ContainerClusterPodAutoscaling;
  /**
  * private_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#private_cluster_config ContainerCluster#private_cluster_config}
  */
  readonly privateClusterConfig?: ContainerClusterPrivateClusterConfig;
  /**
  * rbac_binding_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#rbac_binding_config ContainerCluster#rbac_binding_config}
  */
  readonly rbacBindingConfig?: ContainerClusterRbacBindingConfig;
  /**
  * release_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#release_channel ContainerCluster#release_channel}
  */
  readonly releaseChannel?: ContainerClusterReleaseChannel;
  /**
  * resource_usage_export_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#resource_usage_export_config ContainerCluster#resource_usage_export_config}
  */
  readonly resourceUsageExportConfig?: ContainerClusterResourceUsageExportConfig;
  /**
  * rollback_safe_upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#rollback_safe_upgrade ContainerCluster#rollback_safe_upgrade}
  */
  readonly rollbackSafeUpgrade?: ContainerClusterRollbackSafeUpgrade;
  /**
  * secret_manager_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#secret_manager_config ContainerCluster#secret_manager_config}
  */
  readonly secretManagerConfig?: ContainerClusterSecretManagerConfig;
  /**
  * secret_sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#secret_sync_config ContainerCluster#secret_sync_config}
  */
  readonly secretSyncConfig?: ContainerClusterSecretSyncConfig;
  /**
  * security_posture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#security_posture_config ContainerCluster#security_posture_config}
  */
  readonly securityPostureConfig?: ContainerClusterSecurityPostureConfig;
  /**
  * service_external_ips_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#service_external_ips_config ContainerCluster#service_external_ips_config}
  */
  readonly serviceExternalIpsConfig?: ContainerClusterServiceExternalIpsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#timeouts ContainerCluster#timeouts}
  */
  readonly timeouts?: ContainerClusterTimeouts;
  /**
  * user_managed_keys_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#user_managed_keys_config ContainerCluster#user_managed_keys_config}
  */
  readonly userManagedKeysConfig?: ContainerClusterUserManagedKeysConfig;
  /**
  * vertical_pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#vertical_pod_autoscaling ContainerCluster#vertical_pod_autoscaling}
  */
  readonly verticalPodAutoscaling?: ContainerClusterVerticalPodAutoscaling;
  /**
  * workload_identity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#workload_identity_config ContainerCluster#workload_identity_config}
  */
  readonly workloadIdentityConfig?: ContainerClusterWorkloadIdentityConfig;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster google_container_cluster}
*/
export class ContainerCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContainerCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerCluster to import
  * @param importFromId The id of the existing ContainerCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_container_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_cluster google_container_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNetAdmin = config.allowNetAdmin;
    this._autopilotPrivilegedAdmission = config.autopilotPrivilegedAdmission;
    this._clusterIpv4Cidr = config.clusterIpv4Cidr;
    this._datapathProvider = config.datapathProvider;
    this._dataplaneOptimizationMode = config.dataplaneOptimizationMode;
    this._defaultMaxPodsPerNode = config.defaultMaxPodsPerNode;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._desiredEmulatedVersion = config.desiredEmulatedVersion;
    this._disableL4LbFirewallReconciliation = config.disableL4LbFirewallReconciliation;
    this._enableAutopilot = config.enableAutopilot;
    this._enableCiliumClusterwideNetworkPolicy = config.enableCiliumClusterwideNetworkPolicy;
    this._enableFqdnNetworkPolicy = config.enableFqdnNetworkPolicy;
    this._enableIntranodeVisibility = config.enableIntranodeVisibility;
    this._enableKubernetesAlpha = config.enableKubernetesAlpha;
    this._enableL4IlbSubsetting = config.enableL4IlbSubsetting;
    this._enableLegacyAbac = config.enableLegacyAbac;
    this._enableMultiNetworking = config.enableMultiNetworking;
    this._enableShieldedNodes = config.enableShieldedNodes;
    this._enableTpu = config.enableTpu;
    this._id = config.id;
    this._ignoreNodeCountChanges = config.ignoreNodeCountChanges;
    this._inTransitEncryptionConfig = config.inTransitEncryptionConfig;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._loggingService = config.loggingService;
    this._minMasterVersion = config.minMasterVersion;
    this._monitoringService = config.monitoringService;
    this._name = config.name;
    this._network = config.network;
    this._networkingMode = config.networkingMode;
    this._nodeLocations = config.nodeLocations;
    this._nodeVersion = config.nodeVersion;
    this._privateIpv6GoogleAccess = config.privateIpv6GoogleAccess;
    this._project = config.project;
    this._removeDefaultNodePool = config.removeDefaultNodePool;
    this._resourceLabels = config.resourceLabels;
    this._skipNodePoolRefresh = config.skipNodePoolRefresh;
    this._subnetwork = config.subnetwork;
    this._addonsConfig.internalValue = config.addonsConfig;
    this._anonymousAuthenticationConfig.internalValue = config.anonymousAuthenticationConfig;
    this._authenticatorGroupsConfig.internalValue = config.authenticatorGroupsConfig;
    this._autopilotClusterPolicyConfig.internalValue = config.autopilotClusterPolicyConfig;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._clusterAutoscaling.internalValue = config.clusterAutoscaling;
    this._confidentialNodes.internalValue = config.confidentialNodes;
    this._controlPlaneEndpointsConfig.internalValue = config.controlPlaneEndpointsConfig;
    this._costManagementConfig.internalValue = config.costManagementConfig;
    this._databaseEncryption.internalValue = config.databaseEncryption;
    this._defaultSnatStatus.internalValue = config.defaultSnatStatus;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._enableK8SBetaApis.internalValue = config.enableK8SBetaApis;
    this._enterpriseConfig.internalValue = config.enterpriseConfig;
    this._fleet.internalValue = config.fleet;
    this._gatewayApiConfig.internalValue = config.gatewayApiConfig;
    this._gkeAutoUpgradeConfig.internalValue = config.gkeAutoUpgradeConfig;
    this._identityServiceConfig.internalValue = config.identityServiceConfig;
    this._ipAllocationPolicy.internalValue = config.ipAllocationPolicy;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._masterAuth.internalValue = config.masterAuth;
    this._masterAuthorizedNetworksConfig.internalValue = config.masterAuthorizedNetworksConfig;
    this._meshCertificates.internalValue = config.meshCertificates;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._networkPerformanceConfig.internalValue = config.networkPerformanceConfig;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._nodeCreationConfig.internalValue = config.nodeCreationConfig;
    this._nodePool.internalValue = config.nodePool;
    this._nodePoolAutoConfig.internalValue = config.nodePoolAutoConfig;
    this._nodePoolDefaults.internalValue = config.nodePoolDefaults;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._podAutoscaling.internalValue = config.podAutoscaling;
    this._privateClusterConfig.internalValue = config.privateClusterConfig;
    this._rbacBindingConfig.internalValue = config.rbacBindingConfig;
    this._releaseChannel.internalValue = config.releaseChannel;
    this._resourceUsageExportConfig.internalValue = config.resourceUsageExportConfig;
    this._rollbackSafeUpgrade.internalValue = config.rollbackSafeUpgrade;
    this._secretManagerConfig.internalValue = config.secretManagerConfig;
    this._secretSyncConfig.internalValue = config.secretSyncConfig;
    this._securityPostureConfig.internalValue = config.securityPostureConfig;
    this._serviceExternalIpsConfig.internalValue = config.serviceExternalIpsConfig;
    this._timeouts.internalValue = config.timeouts;
    this._userManagedKeysConfig.internalValue = config.userManagedKeysConfig;
    this._verticalPodAutoscaling.internalValue = config.verticalPodAutoscaling;
    this._workloadIdentityConfig.internalValue = config.workloadIdentityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_net_admin - computed: false, optional: true, required: false
  private _allowNetAdmin?: boolean | cdktn.IResolvable; 
  public get allowNetAdmin() {
    return this.getBooleanAttribute('allow_net_admin');
  }
  public set allowNetAdmin(value: boolean | cdktn.IResolvable) {
    this._allowNetAdmin = value;
  }
  public resetAllowNetAdmin() {
    this._allowNetAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNetAdminInput() {
    return this._allowNetAdmin;
  }

  // autopilot_privileged_admission - computed: true, optional: true, required: false
  private _autopilotPrivilegedAdmission?: string[]; 
  public get autopilotPrivilegedAdmission() {
    return this.getListAttribute('autopilot_privileged_admission');
  }
  public set autopilotPrivilegedAdmission(value: string[]) {
    this._autopilotPrivilegedAdmission = value;
  }
  public resetAutopilotPrivilegedAdmission() {
    this._autopilotPrivilegedAdmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autopilotPrivilegedAdmissionInput() {
    return this._autopilotPrivilegedAdmission;
  }

  // cluster_ipv4_cidr - computed: true, optional: true, required: false
  private _clusterIpv4Cidr?: string; 
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }
  public set clusterIpv4Cidr(value: string) {
    this._clusterIpv4Cidr = value;
  }
  public resetClusterIpv4Cidr() {
    this._clusterIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrInput() {
    return this._clusterIpv4Cidr;
  }

  // datapath_provider - computed: true, optional: true, required: false
  private _datapathProvider?: string; 
  public get datapathProvider() {
    return this.getStringAttribute('datapath_provider');
  }
  public set datapathProvider(value: string) {
    this._datapathProvider = value;
  }
  public resetDatapathProvider() {
    this._datapathProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathProviderInput() {
    return this._datapathProvider;
  }

  // dataplane_optimization_mode - computed: false, optional: true, required: false
  private _dataplaneOptimizationMode?: string; 
  public get dataplaneOptimizationMode() {
    return this.getStringAttribute('dataplane_optimization_mode');
  }
  public set dataplaneOptimizationMode(value: string) {
    this._dataplaneOptimizationMode = value;
  }
  public resetDataplaneOptimizationMode() {
    this._dataplaneOptimizationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneOptimizationModeInput() {
    return this._dataplaneOptimizationMode;
  }

  // default_max_pods_per_node - computed: true, optional: true, required: false
  private _defaultMaxPodsPerNode?: number; 
  public get defaultMaxPodsPerNode() {
    return this.getNumberAttribute('default_max_pods_per_node');
  }
  public set defaultMaxPodsPerNode(value: number) {
    this._defaultMaxPodsPerNode = value;
  }
  public resetDefaultMaxPodsPerNode() {
    this._defaultMaxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxPodsPerNodeInput() {
    return this._defaultMaxPodsPerNode;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_emulated_version - computed: false, optional: true, required: false
  private _desiredEmulatedVersion?: string; 
  public get desiredEmulatedVersion() {
    return this.getStringAttribute('desired_emulated_version');
  }
  public set desiredEmulatedVersion(value: string) {
    this._desiredEmulatedVersion = value;
  }
  public resetDesiredEmulatedVersion() {
    this._desiredEmulatedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredEmulatedVersionInput() {
    return this._desiredEmulatedVersion;
  }

  // disable_l4_lb_firewall_reconciliation - computed: false, optional: true, required: false
  private _disableL4LbFirewallReconciliation?: boolean | cdktn.IResolvable; 
  public get disableL4LbFirewallReconciliation() {
    return this.getBooleanAttribute('disable_l4_lb_firewall_reconciliation');
  }
  public set disableL4LbFirewallReconciliation(value: boolean | cdktn.IResolvable) {
    this._disableL4LbFirewallReconciliation = value;
  }
  public resetDisableL4LbFirewallReconciliation() {
    this._disableL4LbFirewallReconciliation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableL4LbFirewallReconciliationInput() {
    return this._disableL4LbFirewallReconciliation;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // emulated_version - computed: true, optional: false, required: false
  public get emulatedVersion() {
    return this.getStringAttribute('emulated_version');
  }

  // enable_autopilot - computed: false, optional: true, required: false
  private _enableAutopilot?: boolean | cdktn.IResolvable; 
  public get enableAutopilot() {
    return this.getBooleanAttribute('enable_autopilot');
  }
  public set enableAutopilot(value: boolean | cdktn.IResolvable) {
    this._enableAutopilot = value;
  }
  public resetEnableAutopilot() {
    this._enableAutopilot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutopilotInput() {
    return this._enableAutopilot;
  }

  // enable_cilium_clusterwide_network_policy - computed: false, optional: true, required: false
  private _enableCiliumClusterwideNetworkPolicy?: boolean | cdktn.IResolvable; 
  public get enableCiliumClusterwideNetworkPolicy() {
    return this.getBooleanAttribute('enable_cilium_clusterwide_network_policy');
  }
  public set enableCiliumClusterwideNetworkPolicy(value: boolean | cdktn.IResolvable) {
    this._enableCiliumClusterwideNetworkPolicy = value;
  }
  public resetEnableCiliumClusterwideNetworkPolicy() {
    this._enableCiliumClusterwideNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCiliumClusterwideNetworkPolicyInput() {
    return this._enableCiliumClusterwideNetworkPolicy;
  }

  // enable_fqdn_network_policy - computed: false, optional: true, required: false
  private _enableFqdnNetworkPolicy?: boolean | cdktn.IResolvable; 
  public get enableFqdnNetworkPolicy() {
    return this.getBooleanAttribute('enable_fqdn_network_policy');
  }
  public set enableFqdnNetworkPolicy(value: boolean | cdktn.IResolvable) {
    this._enableFqdnNetworkPolicy = value;
  }
  public resetEnableFqdnNetworkPolicy() {
    this._enableFqdnNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFqdnNetworkPolicyInput() {
    return this._enableFqdnNetworkPolicy;
  }

  // enable_intranode_visibility - computed: true, optional: true, required: false
  private _enableIntranodeVisibility?: boolean | cdktn.IResolvable; 
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }
  public set enableIntranodeVisibility(value: boolean | cdktn.IResolvable) {
    this._enableIntranodeVisibility = value;
  }
  public resetEnableIntranodeVisibility() {
    this._enableIntranodeVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntranodeVisibilityInput() {
    return this._enableIntranodeVisibility;
  }

  // enable_kubernetes_alpha - computed: false, optional: true, required: false
  private _enableKubernetesAlpha?: boolean | cdktn.IResolvable; 
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }
  public set enableKubernetesAlpha(value: boolean | cdktn.IResolvable) {
    this._enableKubernetesAlpha = value;
  }
  public resetEnableKubernetesAlpha() {
    this._enableKubernetesAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesAlphaInput() {
    return this._enableKubernetesAlpha;
  }

  // enable_l4_ilb_subsetting - computed: true, optional: true, required: false
  private _enableL4IlbSubsetting?: boolean | cdktn.IResolvable; 
  public get enableL4IlbSubsetting() {
    return this.getBooleanAttribute('enable_l4_ilb_subsetting');
  }
  public set enableL4IlbSubsetting(value: boolean | cdktn.IResolvable) {
    this._enableL4IlbSubsetting = value;
  }
  public resetEnableL4IlbSubsetting() {
    this._enableL4IlbSubsetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableL4IlbSubsettingInput() {
    return this._enableL4IlbSubsetting;
  }

  // enable_legacy_abac - computed: false, optional: true, required: false
  private _enableLegacyAbac?: boolean | cdktn.IResolvable; 
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }
  public set enableLegacyAbac(value: boolean | cdktn.IResolvable) {
    this._enableLegacyAbac = value;
  }
  public resetEnableLegacyAbac() {
    this._enableLegacyAbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyAbacInput() {
    return this._enableLegacyAbac;
  }

  // enable_multi_networking - computed: false, optional: true, required: false
  private _enableMultiNetworking?: boolean | cdktn.IResolvable; 
  public get enableMultiNetworking() {
    return this.getBooleanAttribute('enable_multi_networking');
  }
  public set enableMultiNetworking(value: boolean | cdktn.IResolvable) {
    this._enableMultiNetworking = value;
  }
  public resetEnableMultiNetworking() {
    this._enableMultiNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiNetworkingInput() {
    return this._enableMultiNetworking;
  }

  // enable_shielded_nodes - computed: false, optional: true, required: false
  private _enableShieldedNodes?: boolean | cdktn.IResolvable; 
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes');
  }
  public set enableShieldedNodes(value: boolean | cdktn.IResolvable) {
    this._enableShieldedNodes = value;
  }
  public resetEnableShieldedNodes() {
    this._enableShieldedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShieldedNodesInput() {
    return this._enableShieldedNodes;
  }

  // enable_tpu - computed: false, optional: true, required: false
  private _enableTpu?: boolean | cdktn.IResolvable; 
  public get enableTpu() {
    return this.getBooleanAttribute('enable_tpu');
  }
  public set enableTpu(value: boolean | cdktn.IResolvable) {
    this._enableTpu = value;
  }
  public resetEnableTpu() {
    this._enableTpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTpuInput() {
    return this._enableTpu;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_node_count_changes - computed: false, optional: true, required: false
  private _ignoreNodeCountChanges?: boolean | cdktn.IResolvable; 
  public get ignoreNodeCountChanges() {
    return this.getBooleanAttribute('ignore_node_count_changes');
  }
  public set ignoreNodeCountChanges(value: boolean | cdktn.IResolvable) {
    this._ignoreNodeCountChanges = value;
  }
  public resetIgnoreNodeCountChanges() {
    this._ignoreNodeCountChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNodeCountChangesInput() {
    return this._ignoreNodeCountChanges;
  }

  // in_transit_encryption_config - computed: false, optional: true, required: false
  private _inTransitEncryptionConfig?: string; 
  public get inTransitEncryptionConfig() {
    return this.getStringAttribute('in_transit_encryption_config');
  }
  public set inTransitEncryptionConfig(value: string) {
    this._inTransitEncryptionConfig = value;
  }
  public resetInTransitEncryptionConfig() {
    this._inTransitEncryptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTransitEncryptionConfigInput() {
    return this._inTransitEncryptionConfig;
  }

  // initial_node_count - computed: false, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // logging_service - computed: true, optional: true, required: false
  private _loggingService?: string; 
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }
  public set loggingService(value: string) {
    this._loggingService = value;
  }
  public resetLoggingService() {
    this._loggingService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingServiceInput() {
    return this._loggingService;
  }

  // master_version - computed: true, optional: false, required: false
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // min_master_version - computed: false, optional: true, required: false
  private _minMasterVersion?: string; 
  public get minMasterVersion() {
    return this.getStringAttribute('min_master_version');
  }
  public set minMasterVersion(value: string) {
    this._minMasterVersion = value;
  }
  public resetMinMasterVersion() {
    this._minMasterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMasterVersionInput() {
    return this._minMasterVersion;
  }

  // monitoring_service - computed: true, optional: true, required: false
  private _monitoringService?: string; 
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
  }
  public set monitoringService(value: string) {
    this._monitoringService = value;
  }
  public resetMonitoringService() {
    this._monitoringService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringServiceInput() {
    return this._monitoringService;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // networking_mode - computed: true, optional: true, required: false
  private _networkingMode?: string; 
  public get networkingMode() {
    return this.getStringAttribute('networking_mode');
  }
  public set networkingMode(value: string) {
    this._networkingMode = value;
  }
  public resetNetworkingMode() {
    this._networkingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingModeInput() {
    return this._networkingMode;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // node_version - computed: true, optional: true, required: false
  private _nodeVersion?: string; 
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string) {
    this._nodeVersion = value;
  }
  public resetNodeVersion() {
    this._nodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVersionInput() {
    return this._nodeVersion;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // private_ipv6_google_access - computed: true, optional: true, required: false
  private _privateIpv6GoogleAccess?: string; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // remove_default_node_pool - computed: false, optional: true, required: false
  private _removeDefaultNodePool?: boolean | cdktn.IResolvable; 
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }
  public set removeDefaultNodePool(value: boolean | cdktn.IResolvable) {
    this._removeDefaultNodePool = value;
  }
  public resetRemoveDefaultNodePool() {
    this._removeDefaultNodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultNodePoolInput() {
    return this._removeDefaultNodePool;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // services_ipv4_cidr - computed: true, optional: false, required: false
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }

  // skip_node_pool_refresh - computed: false, optional: true, required: false
  private _skipNodePoolRefresh?: boolean | cdktn.IResolvable; 
  public get skipNodePoolRefresh() {
    return this.getBooleanAttribute('skip_node_pool_refresh');
  }
  public set skipNodePoolRefresh(value: boolean | cdktn.IResolvable) {
    this._skipNodePoolRefresh = value;
  }
  public resetSkipNodePoolRefresh() {
    this._skipNodePoolRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodePoolRefreshInput() {
    return this._skipNodePoolRefresh;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // tpu_ipv4_cidr_block - computed: true, optional: false, required: false
  public get tpuIpv4CidrBlock() {
    return this.getStringAttribute('tpu_ipv4_cidr_block');
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new ContainerClusterAddonsConfigOutputReference(this, "addons_config");
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: ContainerClusterAddonsConfig) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // anonymous_authentication_config - computed: false, optional: true, required: false
  private _anonymousAuthenticationConfig = new ContainerClusterAnonymousAuthenticationConfigOutputReference(this, "anonymous_authentication_config");
  public get anonymousAuthenticationConfig() {
    return this._anonymousAuthenticationConfig;
  }
  public putAnonymousAuthenticationConfig(value: ContainerClusterAnonymousAuthenticationConfig) {
    this._anonymousAuthenticationConfig.internalValue = value;
  }
  public resetAnonymousAuthenticationConfig() {
    this._anonymousAuthenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousAuthenticationConfigInput() {
    return this._anonymousAuthenticationConfig.internalValue;
  }

  // authenticator_groups_config - computed: false, optional: true, required: false
  private _authenticatorGroupsConfig = new ContainerClusterAuthenticatorGroupsConfigOutputReference(this, "authenticator_groups_config");
  public get authenticatorGroupsConfig() {
    return this._authenticatorGroupsConfig;
  }
  public putAuthenticatorGroupsConfig(value: ContainerClusterAuthenticatorGroupsConfig) {
    this._authenticatorGroupsConfig.internalValue = value;
  }
  public resetAuthenticatorGroupsConfig() {
    this._authenticatorGroupsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorGroupsConfigInput() {
    return this._authenticatorGroupsConfig.internalValue;
  }

  // autopilot_cluster_policy_config - computed: false, optional: true, required: false
  private _autopilotClusterPolicyConfig = new ContainerClusterAutopilotClusterPolicyConfigOutputReference(this, "autopilot_cluster_policy_config");
  public get autopilotClusterPolicyConfig() {
    return this._autopilotClusterPolicyConfig;
  }
  public putAutopilotClusterPolicyConfig(value: ContainerClusterAutopilotClusterPolicyConfig) {
    this._autopilotClusterPolicyConfig.internalValue = value;
  }
  public resetAutopilotClusterPolicyConfig() {
    this._autopilotClusterPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autopilotClusterPolicyConfigInput() {
    return this._autopilotClusterPolicyConfig.internalValue;
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new ContainerClusterBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: ContainerClusterBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // cluster_autoscaling - computed: false, optional: true, required: false
  private _clusterAutoscaling = new ContainerClusterClusterAutoscalingOutputReference(this, "cluster_autoscaling");
  public get clusterAutoscaling() {
    return this._clusterAutoscaling;
  }
  public putClusterAutoscaling(value: ContainerClusterClusterAutoscaling) {
    this._clusterAutoscaling.internalValue = value;
  }
  public resetClusterAutoscaling() {
    this._clusterAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoscalingInput() {
    return this._clusterAutoscaling.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new ContainerClusterConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerClusterConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // control_plane_endpoints_config - computed: false, optional: true, required: false
  private _controlPlaneEndpointsConfig = new ContainerClusterControlPlaneEndpointsConfigOutputReference(this, "control_plane_endpoints_config");
  public get controlPlaneEndpointsConfig() {
    return this._controlPlaneEndpointsConfig;
  }
  public putControlPlaneEndpointsConfig(value: ContainerClusterControlPlaneEndpointsConfig) {
    this._controlPlaneEndpointsConfig.internalValue = value;
  }
  public resetControlPlaneEndpointsConfig() {
    this._controlPlaneEndpointsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointsConfigInput() {
    return this._controlPlaneEndpointsConfig.internalValue;
  }

  // cost_management_config - computed: false, optional: true, required: false
  private _costManagementConfig = new ContainerClusterCostManagementConfigOutputReference(this, "cost_management_config");
  public get costManagementConfig() {
    return this._costManagementConfig;
  }
  public putCostManagementConfig(value: ContainerClusterCostManagementConfig) {
    this._costManagementConfig.internalValue = value;
  }
  public resetCostManagementConfig() {
    this._costManagementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costManagementConfigInput() {
    return this._costManagementConfig.internalValue;
  }

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption = new ContainerClusterDatabaseEncryptionOutputReference(this, "database_encryption");
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public putDatabaseEncryption(value: ContainerClusterDatabaseEncryption) {
    this._databaseEncryption.internalValue = value;
  }
  public resetDatabaseEncryption() {
    this._databaseEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption.internalValue;
  }

  // default_snat_status - computed: false, optional: true, required: false
  private _defaultSnatStatus = new ContainerClusterDefaultSnatStatusOutputReference(this, "default_snat_status");
  public get defaultSnatStatus() {
    return this._defaultSnatStatus;
  }
  public putDefaultSnatStatus(value: ContainerClusterDefaultSnatStatus) {
    this._defaultSnatStatus.internalValue = value;
  }
  public resetDefaultSnatStatus() {
    this._defaultSnatStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSnatStatusInput() {
    return this._defaultSnatStatus.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new ContainerClusterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: ContainerClusterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // enable_k8s_beta_apis - computed: false, optional: true, required: false
  private _enableK8SBetaApis = new ContainerClusterEnableK8SBetaApisOutputReference(this, "enable_k8s_beta_apis");
  public get enableK8SBetaApis() {
    return this._enableK8SBetaApis;
  }
  public putEnableK8SBetaApis(value: ContainerClusterEnableK8SBetaApis) {
    this._enableK8SBetaApis.internalValue = value;
  }
  public resetEnableK8SBetaApis() {
    this._enableK8SBetaApis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8SBetaApisInput() {
    return this._enableK8SBetaApis.internalValue;
  }

  // enterprise_config - computed: false, optional: true, required: false
  private _enterpriseConfig = new ContainerClusterEnterpriseConfigOutputReference(this, "enterprise_config");
  public get enterpriseConfig() {
    return this._enterpriseConfig;
  }
  public putEnterpriseConfig(value: ContainerClusterEnterpriseConfig) {
    this._enterpriseConfig.internalValue = value;
  }
  public resetEnterpriseConfig() {
    this._enterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseConfigInput() {
    return this._enterpriseConfig.internalValue;
  }

  // fleet - computed: false, optional: true, required: false
  private _fleet = new ContainerClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: ContainerClusterFleet) {
    this._fleet.internalValue = value;
  }
  public resetFleet() {
    this._fleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // gateway_api_config - computed: false, optional: true, required: false
  private _gatewayApiConfig = new ContainerClusterGatewayApiConfigOutputReference(this, "gateway_api_config");
  public get gatewayApiConfig() {
    return this._gatewayApiConfig;
  }
  public putGatewayApiConfig(value: ContainerClusterGatewayApiConfig) {
    this._gatewayApiConfig.internalValue = value;
  }
  public resetGatewayApiConfig() {
    this._gatewayApiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayApiConfigInput() {
    return this._gatewayApiConfig.internalValue;
  }

  // gke_auto_upgrade_config - computed: false, optional: true, required: false
  private _gkeAutoUpgradeConfig = new ContainerClusterGkeAutoUpgradeConfigOutputReference(this, "gke_auto_upgrade_config");
  public get gkeAutoUpgradeConfig() {
    return this._gkeAutoUpgradeConfig;
  }
  public putGkeAutoUpgradeConfig(value: ContainerClusterGkeAutoUpgradeConfig) {
    this._gkeAutoUpgradeConfig.internalValue = value;
  }
  public resetGkeAutoUpgradeConfig() {
    this._gkeAutoUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeAutoUpgradeConfigInput() {
    return this._gkeAutoUpgradeConfig.internalValue;
  }

  // identity_service_config - computed: false, optional: true, required: false
  private _identityServiceConfig = new ContainerClusterIdentityServiceConfigOutputReference(this, "identity_service_config");
  public get identityServiceConfig() {
    return this._identityServiceConfig;
  }
  public putIdentityServiceConfig(value: ContainerClusterIdentityServiceConfig) {
    this._identityServiceConfig.internalValue = value;
  }
  public resetIdentityServiceConfig() {
    this._identityServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityServiceConfigInput() {
    return this._identityServiceConfig.internalValue;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new ContainerClusterIpAllocationPolicyOutputReference(this, "ip_allocation_policy");
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: ContainerClusterIpAllocationPolicy) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new ContainerClusterLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: ContainerClusterLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new ContainerClusterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: ContainerClusterMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // master_auth - computed: false, optional: true, required: false
  private _masterAuth = new ContainerClusterMasterAuthOutputReference(this, "master_auth");
  public get masterAuth() {
    return this._masterAuth;
  }
  public putMasterAuth(value: ContainerClusterMasterAuth) {
    this._masterAuth.internalValue = value;
  }
  public resetMasterAuth() {
    this._masterAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthInput() {
    return this._masterAuth.internalValue;
  }

  // master_authorized_networks_config - computed: false, optional: true, required: false
  private _masterAuthorizedNetworksConfig = new ContainerClusterMasterAuthorizedNetworksConfigOutputReference(this, "master_authorized_networks_config");
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }
  public putMasterAuthorizedNetworksConfig(value: ContainerClusterMasterAuthorizedNetworksConfig) {
    this._masterAuthorizedNetworksConfig.internalValue = value;
  }
  public resetMasterAuthorizedNetworksConfig() {
    this._masterAuthorizedNetworksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthorizedNetworksConfigInput() {
    return this._masterAuthorizedNetworksConfig.internalValue;
  }

  // mesh_certificates - computed: false, optional: true, required: false
  private _meshCertificates = new ContainerClusterMeshCertificatesOutputReference(this, "mesh_certificates");
  public get meshCertificates() {
    return this._meshCertificates;
  }
  public putMeshCertificates(value: ContainerClusterMeshCertificates) {
    this._meshCertificates.internalValue = value;
  }
  public resetMeshCertificates() {
    this._meshCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshCertificatesInput() {
    return this._meshCertificates.internalValue;
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new ContainerClusterMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: ContainerClusterMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new ContainerClusterNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: ContainerClusterNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new ContainerClusterNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: ContainerClusterNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ContainerClusterNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ContainerClusterNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_creation_config - computed: false, optional: true, required: false
  private _nodeCreationConfig = new ContainerClusterNodeCreationConfigOutputReference(this, "node_creation_config");
  public get nodeCreationConfig() {
    return this._nodeCreationConfig;
  }
  public putNodeCreationConfig(value: ContainerClusterNodeCreationConfig) {
    this._nodeCreationConfig.internalValue = value;
  }
  public resetNodeCreationConfig() {
    this._nodeCreationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCreationConfigInput() {
    return this._nodeCreationConfig.internalValue;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new ContainerClusterNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: ContainerClusterNodePool[] | cdktn.IResolvable) {
    this._nodePool.internalValue = value;
  }
  public resetNodePool() {
    this._nodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }

  // node_pool_auto_config - computed: false, optional: true, required: false
  private _nodePoolAutoConfig = new ContainerClusterNodePoolAutoConfigOutputReference(this, "node_pool_auto_config");
  public get nodePoolAutoConfig() {
    return this._nodePoolAutoConfig;
  }
  public putNodePoolAutoConfig(value: ContainerClusterNodePoolAutoConfig) {
    this._nodePoolAutoConfig.internalValue = value;
  }
  public resetNodePoolAutoConfig() {
    this._nodePoolAutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolAutoConfigInput() {
    return this._nodePoolAutoConfig.internalValue;
  }

  // node_pool_defaults - computed: false, optional: true, required: false
  private _nodePoolDefaults = new ContainerClusterNodePoolDefaultsOutputReference(this, "node_pool_defaults");
  public get nodePoolDefaults() {
    return this._nodePoolDefaults;
  }
  public putNodePoolDefaults(value: ContainerClusterNodePoolDefaults) {
    this._nodePoolDefaults.internalValue = value;
  }
  public resetNodePoolDefaults() {
    this._nodePoolDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolDefaultsInput() {
    return this._nodePoolDefaults.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new ContainerClusterNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: ContainerClusterNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // pod_autoscaling - computed: false, optional: true, required: false
  private _podAutoscaling = new ContainerClusterPodAutoscalingOutputReference(this, "pod_autoscaling");
  public get podAutoscaling() {
    return this._podAutoscaling;
  }
  public putPodAutoscaling(value: ContainerClusterPodAutoscaling) {
    this._podAutoscaling.internalValue = value;
  }
  public resetPodAutoscaling() {
    this._podAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAutoscalingInput() {
    return this._podAutoscaling.internalValue;
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig = new ContainerClusterPrivateClusterConfigOutputReference(this, "private_cluster_config");
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }
  public putPrivateClusterConfig(value: ContainerClusterPrivateClusterConfig) {
    this._privateClusterConfig.internalValue = value;
  }
  public resetPrivateClusterConfig() {
    this._privateClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterConfigInput() {
    return this._privateClusterConfig.internalValue;
  }

  // rbac_binding_config - computed: false, optional: true, required: false
  private _rbacBindingConfig = new ContainerClusterRbacBindingConfigOutputReference(this, "rbac_binding_config");
  public get rbacBindingConfig() {
    return this._rbacBindingConfig;
  }
  public putRbacBindingConfig(value: ContainerClusterRbacBindingConfig) {
    this._rbacBindingConfig.internalValue = value;
  }
  public resetRbacBindingConfig() {
    this._rbacBindingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacBindingConfigInput() {
    return this._rbacBindingConfig.internalValue;
  }

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel = new ContainerClusterReleaseChannelOutputReference(this, "release_channel");
  public get releaseChannel() {
    return this._releaseChannel;
  }
  public putReleaseChannel(value: ContainerClusterReleaseChannel) {
    this._releaseChannel.internalValue = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel.internalValue;
  }

  // resource_usage_export_config - computed: false, optional: true, required: false
  private _resourceUsageExportConfig = new ContainerClusterResourceUsageExportConfigOutputReference(this, "resource_usage_export_config");
  public get resourceUsageExportConfig() {
    return this._resourceUsageExportConfig;
  }
  public putResourceUsageExportConfig(value: ContainerClusterResourceUsageExportConfig) {
    this._resourceUsageExportConfig.internalValue = value;
  }
  public resetResourceUsageExportConfig() {
    this._resourceUsageExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageExportConfigInput() {
    return this._resourceUsageExportConfig.internalValue;
  }

  // rollback_safe_upgrade - computed: false, optional: true, required: false
  private _rollbackSafeUpgrade = new ContainerClusterRollbackSafeUpgradeOutputReference(this, "rollback_safe_upgrade");
  public get rollbackSafeUpgrade() {
    return this._rollbackSafeUpgrade;
  }
  public putRollbackSafeUpgrade(value: ContainerClusterRollbackSafeUpgrade) {
    this._rollbackSafeUpgrade.internalValue = value;
  }
  public resetRollbackSafeUpgrade() {
    this._rollbackSafeUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackSafeUpgradeInput() {
    return this._rollbackSafeUpgrade.internalValue;
  }

  // secret_manager_config - computed: false, optional: true, required: false
  private _secretManagerConfig = new ContainerClusterSecretManagerConfigOutputReference(this, "secret_manager_config");
  public get secretManagerConfig() {
    return this._secretManagerConfig;
  }
  public putSecretManagerConfig(value: ContainerClusterSecretManagerConfig) {
    this._secretManagerConfig.internalValue = value;
  }
  public resetSecretManagerConfig() {
    this._secretManagerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerConfigInput() {
    return this._secretManagerConfig.internalValue;
  }

  // secret_sync_config - computed: false, optional: true, required: false
  private _secretSyncConfig = new ContainerClusterSecretSyncConfigOutputReference(this, "secret_sync_config");
  public get secretSyncConfig() {
    return this._secretSyncConfig;
  }
  public putSecretSyncConfig(value: ContainerClusterSecretSyncConfig) {
    this._secretSyncConfig.internalValue = value;
  }
  public resetSecretSyncConfig() {
    this._secretSyncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSyncConfigInput() {
    return this._secretSyncConfig.internalValue;
  }

  // security_posture_config - computed: false, optional: true, required: false
  private _securityPostureConfig = new ContainerClusterSecurityPostureConfigOutputReference(this, "security_posture_config");
  public get securityPostureConfig() {
    return this._securityPostureConfig;
  }
  public putSecurityPostureConfig(value: ContainerClusterSecurityPostureConfig) {
    this._securityPostureConfig.internalValue = value;
  }
  public resetSecurityPostureConfig() {
    this._securityPostureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPostureConfigInput() {
    return this._securityPostureConfig.internalValue;
  }

  // service_external_ips_config - computed: false, optional: true, required: false
  private _serviceExternalIpsConfig = new ContainerClusterServiceExternalIpsConfigOutputReference(this, "service_external_ips_config");
  public get serviceExternalIpsConfig() {
    return this._serviceExternalIpsConfig;
  }
  public putServiceExternalIpsConfig(value: ContainerClusterServiceExternalIpsConfig) {
    this._serviceExternalIpsConfig.internalValue = value;
  }
  public resetServiceExternalIpsConfig() {
    this._serviceExternalIpsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExternalIpsConfigInput() {
    return this._serviceExternalIpsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_managed_keys_config - computed: false, optional: true, required: false
  private _userManagedKeysConfig = new ContainerClusterUserManagedKeysConfigOutputReference(this, "user_managed_keys_config");
  public get userManagedKeysConfig() {
    return this._userManagedKeysConfig;
  }
  public putUserManagedKeysConfig(value: ContainerClusterUserManagedKeysConfig) {
    this._userManagedKeysConfig.internalValue = value;
  }
  public resetUserManagedKeysConfig() {
    this._userManagedKeysConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedKeysConfigInput() {
    return this._userManagedKeysConfig.internalValue;
  }

  // vertical_pod_autoscaling - computed: false, optional: true, required: false
  private _verticalPodAutoscaling = new ContainerClusterVerticalPodAutoscalingOutputReference(this, "vertical_pod_autoscaling");
  public get verticalPodAutoscaling() {
    return this._verticalPodAutoscaling;
  }
  public putVerticalPodAutoscaling(value: ContainerClusterVerticalPodAutoscaling) {
    this._verticalPodAutoscaling.internalValue = value;
  }
  public resetVerticalPodAutoscaling() {
    this._verticalPodAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPodAutoscalingInput() {
    return this._verticalPodAutoscaling.internalValue;
  }

  // workload_identity_config - computed: false, optional: true, required: false
  private _workloadIdentityConfig = new ContainerClusterWorkloadIdentityConfigOutputReference(this, "workload_identity_config");
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }
  public putWorkloadIdentityConfig(value: ContainerClusterWorkloadIdentityConfig) {
    this._workloadIdentityConfig.internalValue = value;
  }
  public resetWorkloadIdentityConfig() {
    this._workloadIdentityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityConfigInput() {
    return this._workloadIdentityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_net_admin: cdktn.booleanToTerraform(this._allowNetAdmin),
      autopilot_privileged_admission: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autopilotPrivilegedAdmission),
      cluster_ipv4_cidr: cdktn.stringToTerraform(this._clusterIpv4Cidr),
      datapath_provider: cdktn.stringToTerraform(this._datapathProvider),
      dataplane_optimization_mode: cdktn.stringToTerraform(this._dataplaneOptimizationMode),
      default_max_pods_per_node: cdktn.numberToTerraform(this._defaultMaxPodsPerNode),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      description: cdktn.stringToTerraform(this._description),
      desired_emulated_version: cdktn.stringToTerraform(this._desiredEmulatedVersion),
      disable_l4_lb_firewall_reconciliation: cdktn.booleanToTerraform(this._disableL4LbFirewallReconciliation),
      enable_autopilot: cdktn.booleanToTerraform(this._enableAutopilot),
      enable_cilium_clusterwide_network_policy: cdktn.booleanToTerraform(this._enableCiliumClusterwideNetworkPolicy),
      enable_fqdn_network_policy: cdktn.booleanToTerraform(this._enableFqdnNetworkPolicy),
      enable_intranode_visibility: cdktn.booleanToTerraform(this._enableIntranodeVisibility),
      enable_kubernetes_alpha: cdktn.booleanToTerraform(this._enableKubernetesAlpha),
      enable_l4_ilb_subsetting: cdktn.booleanToTerraform(this._enableL4IlbSubsetting),
      enable_legacy_abac: cdktn.booleanToTerraform(this._enableLegacyAbac),
      enable_multi_networking: cdktn.booleanToTerraform(this._enableMultiNetworking),
      enable_shielded_nodes: cdktn.booleanToTerraform(this._enableShieldedNodes),
      enable_tpu: cdktn.booleanToTerraform(this._enableTpu),
      id: cdktn.stringToTerraform(this._id),
      ignore_node_count_changes: cdktn.booleanToTerraform(this._ignoreNodeCountChanges),
      in_transit_encryption_config: cdktn.stringToTerraform(this._inTransitEncryptionConfig),
      initial_node_count: cdktn.numberToTerraform(this._initialNodeCount),
      location: cdktn.stringToTerraform(this._location),
      logging_service: cdktn.stringToTerraform(this._loggingService),
      min_master_version: cdktn.stringToTerraform(this._minMasterVersion),
      monitoring_service: cdktn.stringToTerraform(this._monitoringService),
      name: cdktn.stringToTerraform(this._name),
      network: cdktn.stringToTerraform(this._network),
      networking_mode: cdktn.stringToTerraform(this._networkingMode),
      node_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._nodeLocations),
      node_version: cdktn.stringToTerraform(this._nodeVersion),
      private_ipv6_google_access: cdktn.stringToTerraform(this._privateIpv6GoogleAccess),
      project: cdktn.stringToTerraform(this._project),
      remove_default_node_pool: cdktn.booleanToTerraform(this._removeDefaultNodePool),
      resource_labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._resourceLabels),
      skip_node_pool_refresh: cdktn.booleanToTerraform(this._skipNodePoolRefresh),
      subnetwork: cdktn.stringToTerraform(this._subnetwork),
      addons_config: containerClusterAddonsConfigToTerraform(this._addonsConfig.internalValue),
      anonymous_authentication_config: containerClusterAnonymousAuthenticationConfigToTerraform(this._anonymousAuthenticationConfig.internalValue),
      authenticator_groups_config: containerClusterAuthenticatorGroupsConfigToTerraform(this._authenticatorGroupsConfig.internalValue),
      autopilot_cluster_policy_config: containerClusterAutopilotClusterPolicyConfigToTerraform(this._autopilotClusterPolicyConfig.internalValue),
      binary_authorization: containerClusterBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      cluster_autoscaling: containerClusterClusterAutoscalingToTerraform(this._clusterAutoscaling.internalValue),
      confidential_nodes: containerClusterConfidentialNodesToTerraform(this._confidentialNodes.internalValue),
      control_plane_endpoints_config: containerClusterControlPlaneEndpointsConfigToTerraform(this._controlPlaneEndpointsConfig.internalValue),
      cost_management_config: containerClusterCostManagementConfigToTerraform(this._costManagementConfig.internalValue),
      database_encryption: containerClusterDatabaseEncryptionToTerraform(this._databaseEncryption.internalValue),
      default_snat_status: containerClusterDefaultSnatStatusToTerraform(this._defaultSnatStatus.internalValue),
      dns_config: containerClusterDnsConfigToTerraform(this._dnsConfig.internalValue),
      enable_k8s_beta_apis: containerClusterEnableK8SBetaApisToTerraform(this._enableK8SBetaApis.internalValue),
      enterprise_config: containerClusterEnterpriseConfigToTerraform(this._enterpriseConfig.internalValue),
      fleet: containerClusterFleetToTerraform(this._fleet.internalValue),
      gateway_api_config: containerClusterGatewayApiConfigToTerraform(this._gatewayApiConfig.internalValue),
      gke_auto_upgrade_config: containerClusterGkeAutoUpgradeConfigToTerraform(this._gkeAutoUpgradeConfig.internalValue),
      identity_service_config: containerClusterIdentityServiceConfigToTerraform(this._identityServiceConfig.internalValue),
      ip_allocation_policy: containerClusterIpAllocationPolicyToTerraform(this._ipAllocationPolicy.internalValue),
      logging_config: containerClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      maintenance_policy: containerClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      master_auth: containerClusterMasterAuthToTerraform(this._masterAuth.internalValue),
      master_authorized_networks_config: containerClusterMasterAuthorizedNetworksConfigToTerraform(this._masterAuthorizedNetworksConfig.internalValue),
      mesh_certificates: containerClusterMeshCertificatesToTerraform(this._meshCertificates.internalValue),
      monitoring_config: containerClusterMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      network_performance_config: containerClusterNetworkPerformanceConfigToTerraform(this._networkPerformanceConfig.internalValue),
      network_policy: containerClusterNetworkPolicyToTerraform(this._networkPolicy.internalValue),
      node_config: containerClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      node_creation_config: containerClusterNodeCreationConfigToTerraform(this._nodeCreationConfig.internalValue),
      node_pool: cdktn.listMapper(containerClusterNodePoolToTerraform, true)(this._nodePool.internalValue),
      node_pool_auto_config: containerClusterNodePoolAutoConfigToTerraform(this._nodePoolAutoConfig.internalValue),
      node_pool_defaults: containerClusterNodePoolDefaultsToTerraform(this._nodePoolDefaults.internalValue),
      notification_config: containerClusterNotificationConfigToTerraform(this._notificationConfig.internalValue),
      pod_autoscaling: containerClusterPodAutoscalingToTerraform(this._podAutoscaling.internalValue),
      private_cluster_config: containerClusterPrivateClusterConfigToTerraform(this._privateClusterConfig.internalValue),
      rbac_binding_config: containerClusterRbacBindingConfigToTerraform(this._rbacBindingConfig.internalValue),
      release_channel: containerClusterReleaseChannelToTerraform(this._releaseChannel.internalValue),
      resource_usage_export_config: containerClusterResourceUsageExportConfigToTerraform(this._resourceUsageExportConfig.internalValue),
      rollback_safe_upgrade: containerClusterRollbackSafeUpgradeToTerraform(this._rollbackSafeUpgrade.internalValue),
      secret_manager_config: containerClusterSecretManagerConfigToTerraform(this._secretManagerConfig.internalValue),
      secret_sync_config: containerClusterSecretSyncConfigToTerraform(this._secretSyncConfig.internalValue),
      security_posture_config: containerClusterSecurityPostureConfigToTerraform(this._securityPostureConfig.internalValue),
      service_external_ips_config: containerClusterServiceExternalIpsConfigToTerraform(this._serviceExternalIpsConfig.internalValue),
      timeouts: containerClusterTimeoutsToTerraform(this._timeouts.internalValue),
      user_managed_keys_config: containerClusterUserManagedKeysConfigToTerraform(this._userManagedKeysConfig.internalValue),
      vertical_pod_autoscaling: containerClusterVerticalPodAutoscalingToTerraform(this._verticalPodAutoscaling.internalValue),
      workload_identity_config: containerClusterWorkloadIdentityConfigToTerraform(this._workloadIdentityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_net_admin: {
        value: cdktn.booleanToHclTerraform(this._allowNetAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autopilot_privileged_admission: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autopilotPrivilegedAdmission),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_ipv4_cidr: {
        value: cdktn.stringToHclTerraform(this._clusterIpv4Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datapath_provider: {
        value: cdktn.stringToHclTerraform(this._datapathProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataplane_optimization_mode: {
        value: cdktn.stringToHclTerraform(this._dataplaneOptimizationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_max_pods_per_node: {
        value: cdktn.numberToHclTerraform(this._defaultMaxPodsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_emulated_version: {
        value: cdktn.stringToHclTerraform(this._desiredEmulatedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_l4_lb_firewall_reconciliation: {
        value: cdktn.booleanToHclTerraform(this._disableL4LbFirewallReconciliation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_autopilot: {
        value: cdktn.booleanToHclTerraform(this._enableAutopilot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cilium_clusterwide_network_policy: {
        value: cdktn.booleanToHclTerraform(this._enableCiliumClusterwideNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fqdn_network_policy: {
        value: cdktn.booleanToHclTerraform(this._enableFqdnNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_intranode_visibility: {
        value: cdktn.booleanToHclTerraform(this._enableIntranodeVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_kubernetes_alpha: {
        value: cdktn.booleanToHclTerraform(this._enableKubernetesAlpha),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_l4_ilb_subsetting: {
        value: cdktn.booleanToHclTerraform(this._enableL4IlbSubsetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_legacy_abac: {
        value: cdktn.booleanToHclTerraform(this._enableLegacyAbac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_multi_networking: {
        value: cdktn.booleanToHclTerraform(this._enableMultiNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_shielded_nodes: {
        value: cdktn.booleanToHclTerraform(this._enableShieldedNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tpu: {
        value: cdktn.booleanToHclTerraform(this._enableTpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_node_count_changes: {
        value: cdktn.booleanToHclTerraform(this._ignoreNodeCountChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      in_transit_encryption_config: {
        value: cdktn.stringToHclTerraform(this._inTransitEncryptionConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_node_count: {
        value: cdktn.numberToHclTerraform(this._initialNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_service: {
        value: cdktn.stringToHclTerraform(this._loggingService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_master_version: {
        value: cdktn.stringToHclTerraform(this._minMasterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_service: {
        value: cdktn.stringToHclTerraform(this._monitoringService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networking_mode: {
        value: cdktn.stringToHclTerraform(this._networkingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._nodeLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      node_version: {
        value: cdktn.stringToHclTerraform(this._nodeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv6_google_access: {
        value: cdktn.stringToHclTerraform(this._privateIpv6GoogleAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_default_node_pool: {
        value: cdktn.booleanToHclTerraform(this._removeDefaultNodePool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._resourceLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      skip_node_pool_refresh: {
        value: cdktn.booleanToHclTerraform(this._skipNodePoolRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnetwork: {
        value: cdktn.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons_config: {
        value: containerClusterAddonsConfigToHclTerraform(this._addonsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterAddonsConfigList",
      },
      anonymous_authentication_config: {
        value: containerClusterAnonymousAuthenticationConfigToHclTerraform(this._anonymousAuthenticationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterAnonymousAuthenticationConfigList",
      },
      authenticator_groups_config: {
        value: containerClusterAuthenticatorGroupsConfigToHclTerraform(this._authenticatorGroupsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterAuthenticatorGroupsConfigList",
      },
      autopilot_cluster_policy_config: {
        value: containerClusterAutopilotClusterPolicyConfigToHclTerraform(this._autopilotClusterPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterAutopilotClusterPolicyConfigList",
      },
      binary_authorization: {
        value: containerClusterBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterBinaryAuthorizationList",
      },
      cluster_autoscaling: {
        value: containerClusterClusterAutoscalingToHclTerraform(this._clusterAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterClusterAutoscalingList",
      },
      confidential_nodes: {
        value: containerClusterConfidentialNodesToHclTerraform(this._confidentialNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterConfidentialNodesList",
      },
      control_plane_endpoints_config: {
        value: containerClusterControlPlaneEndpointsConfigToHclTerraform(this._controlPlaneEndpointsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterControlPlaneEndpointsConfigList",
      },
      cost_management_config: {
        value: containerClusterCostManagementConfigToHclTerraform(this._costManagementConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterCostManagementConfigList",
      },
      database_encryption: {
        value: containerClusterDatabaseEncryptionToHclTerraform(this._databaseEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterDatabaseEncryptionList",
      },
      default_snat_status: {
        value: containerClusterDefaultSnatStatusToHclTerraform(this._defaultSnatStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterDefaultSnatStatusList",
      },
      dns_config: {
        value: containerClusterDnsConfigToHclTerraform(this._dnsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterDnsConfigList",
      },
      enable_k8s_beta_apis: {
        value: containerClusterEnableK8SBetaApisToHclTerraform(this._enableK8SBetaApis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterEnableK8SBetaApisList",
      },
      enterprise_config: {
        value: containerClusterEnterpriseConfigToHclTerraform(this._enterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterEnterpriseConfigList",
      },
      fleet: {
        value: containerClusterFleetToHclTerraform(this._fleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterFleetList",
      },
      gateway_api_config: {
        value: containerClusterGatewayApiConfigToHclTerraform(this._gatewayApiConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterGatewayApiConfigList",
      },
      gke_auto_upgrade_config: {
        value: containerClusterGkeAutoUpgradeConfigToHclTerraform(this._gkeAutoUpgradeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterGkeAutoUpgradeConfigList",
      },
      identity_service_config: {
        value: containerClusterIdentityServiceConfigToHclTerraform(this._identityServiceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterIdentityServiceConfigList",
      },
      ip_allocation_policy: {
        value: containerClusterIpAllocationPolicyToHclTerraform(this._ipAllocationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterIpAllocationPolicyList",
      },
      logging_config: {
        value: containerClusterLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterLoggingConfigList",
      },
      maintenance_policy: {
        value: containerClusterMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterMaintenancePolicyList",
      },
      master_auth: {
        value: containerClusterMasterAuthToHclTerraform(this._masterAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterMasterAuthList",
      },
      master_authorized_networks_config: {
        value: containerClusterMasterAuthorizedNetworksConfigToHclTerraform(this._masterAuthorizedNetworksConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterMasterAuthorizedNetworksConfigList",
      },
      mesh_certificates: {
        value: containerClusterMeshCertificatesToHclTerraform(this._meshCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterMeshCertificatesList",
      },
      monitoring_config: {
        value: containerClusterMonitoringConfigToHclTerraform(this._monitoringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterMonitoringConfigList",
      },
      network_performance_config: {
        value: containerClusterNetworkPerformanceConfigToHclTerraform(this._networkPerformanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNetworkPerformanceConfigList",
      },
      network_policy: {
        value: containerClusterNetworkPolicyToHclTerraform(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNetworkPolicyList",
      },
      node_config: {
        value: containerClusterNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNodeConfigList",
      },
      node_creation_config: {
        value: containerClusterNodeCreationConfigToHclTerraform(this._nodeCreationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNodeCreationConfigList",
      },
      node_pool: {
        value: cdktn.listMapperHcl(containerClusterNodePoolToHclTerraform, true)(this._nodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNodePoolList",
      },
      node_pool_auto_config: {
        value: containerClusterNodePoolAutoConfigToHclTerraform(this._nodePoolAutoConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNodePoolAutoConfigList",
      },
      node_pool_defaults: {
        value: containerClusterNodePoolDefaultsToHclTerraform(this._nodePoolDefaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNodePoolDefaultsList",
      },
      notification_config: {
        value: containerClusterNotificationConfigToHclTerraform(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterNotificationConfigList",
      },
      pod_autoscaling: {
        value: containerClusterPodAutoscalingToHclTerraform(this._podAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterPodAutoscalingList",
      },
      private_cluster_config: {
        value: containerClusterPrivateClusterConfigToHclTerraform(this._privateClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterPrivateClusterConfigList",
      },
      rbac_binding_config: {
        value: containerClusterRbacBindingConfigToHclTerraform(this._rbacBindingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterRbacBindingConfigList",
      },
      release_channel: {
        value: containerClusterReleaseChannelToHclTerraform(this._releaseChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterReleaseChannelList",
      },
      resource_usage_export_config: {
        value: containerClusterResourceUsageExportConfigToHclTerraform(this._resourceUsageExportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterResourceUsageExportConfigList",
      },
      rollback_safe_upgrade: {
        value: containerClusterRollbackSafeUpgradeToHclTerraform(this._rollbackSafeUpgrade.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterRollbackSafeUpgradeList",
      },
      secret_manager_config: {
        value: containerClusterSecretManagerConfigToHclTerraform(this._secretManagerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterSecretManagerConfigList",
      },
      secret_sync_config: {
        value: containerClusterSecretSyncConfigToHclTerraform(this._secretSyncConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterSecretSyncConfigList",
      },
      security_posture_config: {
        value: containerClusterSecurityPostureConfigToHclTerraform(this._securityPostureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterSecurityPostureConfigList",
      },
      service_external_ips_config: {
        value: containerClusterServiceExternalIpsConfigToHclTerraform(this._serviceExternalIpsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterServiceExternalIpsConfigList",
      },
      timeouts: {
        value: containerClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerClusterTimeouts",
      },
      user_managed_keys_config: {
        value: containerClusterUserManagedKeysConfigToHclTerraform(this._userManagedKeysConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterUserManagedKeysConfigList",
      },
      vertical_pod_autoscaling: {
        value: containerClusterVerticalPodAutoscalingToHclTerraform(this._verticalPodAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterVerticalPodAutoscalingList",
      },
      workload_identity_config: {
        value: containerClusterWorkloadIdentityConfigToHclTerraform(this._workloadIdentityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerClusterWorkloadIdentityConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
