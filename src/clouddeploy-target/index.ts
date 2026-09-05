/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ClouddeployTargetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#deletion_policy ClouddeployTarget#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The deploy parameters to use for this target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#deploy_parameters ClouddeployTarget#deploy_parameters}
  */
  readonly deployParameters?: { [key: string]: string };
  /**
  * Optional. Description of the `Target`. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#description ClouddeployTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#id ClouddeployTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#location ClouddeployTarget#location}
  */
  readonly location: string;
  /**
  * Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#name ClouddeployTarget#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#project ClouddeployTarget#project}
  */
  readonly project?: string;
  /**
  * Optional. Whether or not the `Target` requires approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}
  */
  readonly requireApproval?: boolean | cdktn.IResolvable;
  /**
  * anthos_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}
  */
  readonly anthosCluster?: ClouddeployTargetAnthosCluster;
  /**
  * associated_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#associated_entities ClouddeployTarget#associated_entities}
  */
  readonly associatedEntities?: ClouddeployTargetAssociatedEntities[] | cdktn.IResolvable;
  /**
  * custom_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#custom_target ClouddeployTarget#custom_target}
  */
  readonly customTarget?: ClouddeployTargetCustomTarget;
  /**
  * execution_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}
  */
  readonly executionConfigs?: ClouddeployTargetExecutionConfigs[] | cdktn.IResolvable;
  /**
  * gke block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}
  */
  readonly gke?: ClouddeployTargetGke;
  /**
  * multi_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#multi_target ClouddeployTarget#multi_target}
  */
  readonly multiTarget?: ClouddeployTargetMultiTarget;
  /**
  * run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#run ClouddeployTarget#run}
  */
  readonly run?: ClouddeployTargetRun;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}
  */
  readonly timeouts?: ClouddeployTargetTimeouts;
}
export interface ClouddeployTargetAnthosCluster {
  /**
  * Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}
  */
  readonly membership?: string;
}

export function clouddeployTargetAnthosClusterToTerraform(struct?: ClouddeployTargetAnthosClusterOutputReference | ClouddeployTargetAnthosCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    membership: cdktn.stringToTerraform(struct!.membership),
  }
}


export function clouddeployTargetAnthosClusterToHclTerraform(struct?: ClouddeployTargetAnthosClusterOutputReference | ClouddeployTargetAnthosCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    membership: {
      value: cdktn.stringToHclTerraform(struct!.membership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetAnthosClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetAnthosCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._membership !== undefined) {
      hasAnyValues = true;
      internalValueResult.membership = this._membership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetAnthosCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._membership = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._membership = value.membership;
    }
  }

  // membership - computed: false, optional: true, required: false
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  public resetMembership() {
    this._membership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }
}
export interface ClouddeployTargetAssociatedEntitiesAnthosClusters {
  /**
  * Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}
  */
  readonly membership?: string;
}

export function clouddeployTargetAssociatedEntitiesAnthosClustersToTerraform(struct?: ClouddeployTargetAssociatedEntitiesAnthosClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    membership: cdktn.stringToTerraform(struct!.membership),
  }
}


export function clouddeployTargetAssociatedEntitiesAnthosClustersToHclTerraform(struct?: ClouddeployTargetAssociatedEntitiesAnthosClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    membership: {
      value: cdktn.stringToHclTerraform(struct!.membership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployTargetAssociatedEntitiesAnthosClusters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._membership !== undefined) {
      hasAnyValues = true;
      internalValueResult.membership = this._membership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetAssociatedEntitiesAnthosClusters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._membership = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._membership = value.membership;
    }
  }

  // membership - computed: false, optional: true, required: false
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  public resetMembership() {
    this._membership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }
}

export class ClouddeployTargetAssociatedEntitiesAnthosClustersList extends cdktn.ComplexList {
  public internalValue? : ClouddeployTargetAssociatedEntitiesAnthosClusters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference {
    return new ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployTargetAssociatedEntitiesGkeClusters {
  /**
  * Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}
  */
  readonly cluster?: string;
  /**
  * Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}
  */
  readonly internalIp?: boolean | cdktn.IResolvable;
  /**
  * Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}
  */
  readonly proxyUrl?: string;
}

export function clouddeployTargetAssociatedEntitiesGkeClustersToTerraform(struct?: ClouddeployTargetAssociatedEntitiesGkeClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster: cdktn.stringToTerraform(struct!.cluster),
    internal_ip: cdktn.booleanToTerraform(struct!.internalIp),
    proxy_url: cdktn.stringToTerraform(struct!.proxyUrl),
  }
}


export function clouddeployTargetAssociatedEntitiesGkeClustersToHclTerraform(struct?: ClouddeployTargetAssociatedEntitiesGkeClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster: {
      value: cdktn.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_ip: {
      value: cdktn.booleanToHclTerraform(struct!.internalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktn.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployTargetAssociatedEntitiesGkeClusters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetAssociatedEntitiesGkeClusters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._internalIp = undefined;
      this._proxyUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._internalIp = value.internalIp;
      this._proxyUrl = value.proxyUrl;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: boolean | cdktn.IResolvable; 
  public get internalIp() {
    return this.getBooleanAttribute('internal_ip');
  }
  public set internalIp(value: boolean | cdktn.IResolvable) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }
}

export class ClouddeployTargetAssociatedEntitiesGkeClustersList extends cdktn.ComplexList {
  public internalValue? : ClouddeployTargetAssociatedEntitiesGkeClusters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference {
    return new ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployTargetAssociatedEntities {
  /**
  * The name for the key in the map for which this object is mapped to in the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#entity_id ClouddeployTarget#entity_id}
  */
  readonly entityId: string;
  /**
  * anthos_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#anthos_clusters ClouddeployTarget#anthos_clusters}
  */
  readonly anthosClusters?: ClouddeployTargetAssociatedEntitiesAnthosClusters[] | cdktn.IResolvable;
  /**
  * gke_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#gke_clusters ClouddeployTarget#gke_clusters}
  */
  readonly gkeClusters?: ClouddeployTargetAssociatedEntitiesGkeClusters[] | cdktn.IResolvable;
}

export function clouddeployTargetAssociatedEntitiesToTerraform(struct?: ClouddeployTargetAssociatedEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id: cdktn.stringToTerraform(struct!.entityId),
    anthos_clusters: cdktn.listMapper(clouddeployTargetAssociatedEntitiesAnthosClustersToTerraform, true)(struct!.anthosClusters),
    gke_clusters: cdktn.listMapper(clouddeployTargetAssociatedEntitiesGkeClustersToTerraform, true)(struct!.gkeClusters),
  }
}


export function clouddeployTargetAssociatedEntitiesToHclTerraform(struct?: ClouddeployTargetAssociatedEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id: {
      value: cdktn.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anthos_clusters: {
      value: cdktn.listMapperHcl(clouddeployTargetAssociatedEntitiesAnthosClustersToHclTerraform, true)(struct!.anthosClusters),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployTargetAssociatedEntitiesAnthosClustersList",
    },
    gke_clusters: {
      value: cdktn.listMapperHcl(clouddeployTargetAssociatedEntitiesGkeClustersToHclTerraform, true)(struct!.gkeClusters),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployTargetAssociatedEntitiesGkeClustersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetAssociatedEntitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployTargetAssociatedEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._anthosClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthosClusters = this._anthosClusters?.internalValue;
    }
    if (this._gkeClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusters = this._gkeClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetAssociatedEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._anthosClusters.internalValue = undefined;
      this._gkeClusters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._anthosClusters.internalValue = value.anthosClusters;
      this._gkeClusters.internalValue = value.gkeClusters;
    }
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // anthos_clusters - computed: false, optional: true, required: false
  private _anthosClusters = new ClouddeployTargetAssociatedEntitiesAnthosClustersList(this, "anthos_clusters", false);
  public get anthosClusters() {
    return this._anthosClusters;
  }
  public putAnthosClusters(value: ClouddeployTargetAssociatedEntitiesAnthosClusters[] | cdktn.IResolvable) {
    this._anthosClusters.internalValue = value;
  }
  public resetAnthosClusters() {
    this._anthosClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthosClustersInput() {
    return this._anthosClusters.internalValue;
  }

  // gke_clusters - computed: false, optional: true, required: false
  private _gkeClusters = new ClouddeployTargetAssociatedEntitiesGkeClustersList(this, "gke_clusters", false);
  public get gkeClusters() {
    return this._gkeClusters;
  }
  public putGkeClusters(value: ClouddeployTargetAssociatedEntitiesGkeClusters[] | cdktn.IResolvable) {
    this._gkeClusters.internalValue = value;
  }
  public resetGkeClusters() {
    this._gkeClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClustersInput() {
    return this._gkeClusters.internalValue;
  }
}

export class ClouddeployTargetAssociatedEntitiesList extends cdktn.ComplexList {
  public internalValue? : ClouddeployTargetAssociatedEntities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClouddeployTargetAssociatedEntitiesOutputReference {
    return new ClouddeployTargetAssociatedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployTargetCustomTarget {
  /**
  * Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#custom_target_type ClouddeployTarget#custom_target_type}
  */
  readonly customTargetType: string;
}

export function clouddeployTargetCustomTargetToTerraform(struct?: ClouddeployTargetCustomTargetOutputReference | ClouddeployTargetCustomTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_target_type: cdktn.stringToTerraform(struct!.customTargetType),
  }
}


export function clouddeployTargetCustomTargetToHclTerraform(struct?: ClouddeployTargetCustomTargetOutputReference | ClouddeployTargetCustomTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_target_type: {
      value: cdktn.stringToHclTerraform(struct!.customTargetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetCustomTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetCustomTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTargetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTargetType = this._customTargetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetCustomTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTargetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTargetType = value.customTargetType;
    }
  }

  // custom_target_type - computed: false, optional: false, required: true
  private _customTargetType?: string; 
  public get customTargetType() {
    return this.getStringAttribute('custom_target_type');
  }
  public set customTargetType(value: string) {
    this._customTargetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customTargetTypeInput() {
    return this._customTargetType;
  }
}
export interface ClouddeployTargetExecutionConfigsDefaultPool {
  /**
  * Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}
  */
  readonly artifactStorage?: string;
  /**
  * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}
  */
  readonly serviceAccount?: string;
}

export function clouddeployTargetExecutionConfigsDefaultPoolToTerraform(struct?: ClouddeployTargetExecutionConfigsDefaultPoolOutputReference | ClouddeployTargetExecutionConfigsDefaultPool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_storage: cdktn.stringToTerraform(struct!.artifactStorage),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function clouddeployTargetExecutionConfigsDefaultPoolToHclTerraform(struct?: ClouddeployTargetExecutionConfigsDefaultPoolOutputReference | ClouddeployTargetExecutionConfigsDefaultPool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_storage: {
      value: cdktn.stringToHclTerraform(struct!.artifactStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetExecutionConfigsDefaultPoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetExecutionConfigsDefaultPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactStorage = this._artifactStorage;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetExecutionConfigsDefaultPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactStorage = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactStorage = value.artifactStorage;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // artifact_storage - computed: true, optional: true, required: false
  private _artifactStorage?: string; 
  public get artifactStorage() {
    return this.getStringAttribute('artifact_storage');
  }
  public set artifactStorage(value: string) {
    this._artifactStorage = value;
  }
  public resetArtifactStorage() {
    this._artifactStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStorageInput() {
    return this._artifactStorage;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface ClouddeployTargetExecutionConfigsPrivatePool {
  /**
  * Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}
  */
  readonly artifactStorage?: string;
  /**
  * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}
  */
  readonly workerPool: string;
}

export function clouddeployTargetExecutionConfigsPrivatePoolToTerraform(struct?: ClouddeployTargetExecutionConfigsPrivatePoolOutputReference | ClouddeployTargetExecutionConfigsPrivatePool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_storage: cdktn.stringToTerraform(struct!.artifactStorage),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    worker_pool: cdktn.stringToTerraform(struct!.workerPool),
  }
}


export function clouddeployTargetExecutionConfigsPrivatePoolToHclTerraform(struct?: ClouddeployTargetExecutionConfigsPrivatePoolOutputReference | ClouddeployTargetExecutionConfigsPrivatePool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_storage: {
      value: cdktn.stringToHclTerraform(struct!.artifactStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool: {
      value: cdktn.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetExecutionConfigsPrivatePoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetExecutionConfigsPrivatePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactStorage = this._artifactStorage;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetExecutionConfigsPrivatePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactStorage = undefined;
      this._serviceAccount = undefined;
      this._workerPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactStorage = value.artifactStorage;
      this._serviceAccount = value.serviceAccount;
      this._workerPool = value.workerPool;
    }
  }

  // artifact_storage - computed: true, optional: true, required: false
  private _artifactStorage?: string; 
  public get artifactStorage() {
    return this.getStringAttribute('artifact_storage');
  }
  public set artifactStorage(value: string) {
    this._artifactStorage = value;
  }
  public resetArtifactStorage() {
    this._artifactStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStorageInput() {
    return this._artifactStorage;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // worker_pool - computed: false, optional: false, required: true
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }
}
export interface ClouddeployTargetExecutionConfigs {
  /**
  * Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}
  */
  readonly artifactStorage?: string;
  /**
  * Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#execution_timeout ClouddeployTarget#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Required. Usages when this configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#usages ClouddeployTarget#usages}
  */
  readonly usages: string[];
  /**
  * Optional. If true, additional logging will be enabled when running builds in this execution environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#verbose ClouddeployTarget#verbose}
  */
  readonly verbose?: boolean | cdktn.IResolvable;
  /**
  * Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * default_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#default_pool ClouddeployTarget#default_pool}
  */
  readonly defaultPool?: ClouddeployTargetExecutionConfigsDefaultPool;
  /**
  * private_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#private_pool ClouddeployTarget#private_pool}
  */
  readonly privatePool?: ClouddeployTargetExecutionConfigsPrivatePool;
}

export function clouddeployTargetExecutionConfigsToTerraform(struct?: ClouddeployTargetExecutionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_storage: cdktn.stringToTerraform(struct!.artifactStorage),
    execution_timeout: cdktn.stringToTerraform(struct!.executionTimeout),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    usages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.usages),
    verbose: cdktn.booleanToTerraform(struct!.verbose),
    worker_pool: cdktn.stringToTerraform(struct!.workerPool),
    default_pool: clouddeployTargetExecutionConfigsDefaultPoolToTerraform(struct!.defaultPool),
    private_pool: clouddeployTargetExecutionConfigsPrivatePoolToTerraform(struct!.privatePool),
  }
}


export function clouddeployTargetExecutionConfigsToHclTerraform(struct?: ClouddeployTargetExecutionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_storage: {
      value: cdktn.stringToHclTerraform(struct!.artifactStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktn.stringToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.usages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbose: {
      value: cdktn.booleanToHclTerraform(struct!.verbose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_pool: {
      value: cdktn.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_pool: {
      value: clouddeployTargetExecutionConfigsDefaultPoolToHclTerraform(struct!.defaultPool),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployTargetExecutionConfigsDefaultPoolList",
    },
    private_pool: {
      value: clouddeployTargetExecutionConfigsPrivatePoolToHclTerraform(struct!.privatePool),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployTargetExecutionConfigsPrivatePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetExecutionConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployTargetExecutionConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactStorage = this._artifactStorage;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    if (this._defaultPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPool = this._defaultPool?.internalValue;
    }
    if (this._privatePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePool = this._privatePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetExecutionConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactStorage = undefined;
      this._executionTimeout = undefined;
      this._serviceAccount = undefined;
      this._usages = undefined;
      this._verbose = undefined;
      this._workerPool = undefined;
      this._defaultPool.internalValue = undefined;
      this._privatePool.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactStorage = value.artifactStorage;
      this._executionTimeout = value.executionTimeout;
      this._serviceAccount = value.serviceAccount;
      this._usages = value.usages;
      this._verbose = value.verbose;
      this._workerPool = value.workerPool;
      this._defaultPool.internalValue = value.defaultPool;
      this._privatePool.internalValue = value.privatePool;
    }
  }

  // artifact_storage - computed: true, optional: true, required: false
  private _artifactStorage?: string; 
  public get artifactStorage() {
    return this.getStringAttribute('artifact_storage');
  }
  public set artifactStorage(value: string) {
    this._artifactStorage = value;
  }
  public resetArtifactStorage() {
    this._artifactStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStorageInput() {
    return this._artifactStorage;
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // usages - computed: false, optional: false, required: true
  private _usages?: string[]; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktn.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktn.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }

  // default_pool - computed: false, optional: true, required: false
  private _defaultPool = new ClouddeployTargetExecutionConfigsDefaultPoolOutputReference(this, "default_pool");
  public get defaultPool() {
    return this._defaultPool;
  }
  public putDefaultPool(value: ClouddeployTargetExecutionConfigsDefaultPool) {
    this._defaultPool.internalValue = value;
  }
  public resetDefaultPool() {
    this._defaultPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolInput() {
    return this._defaultPool.internalValue;
  }

  // private_pool - computed: false, optional: true, required: false
  private _privatePool = new ClouddeployTargetExecutionConfigsPrivatePoolOutputReference(this, "private_pool");
  public get privatePool() {
    return this._privatePool;
  }
  public putPrivatePool(value: ClouddeployTargetExecutionConfigsPrivatePool) {
    this._privatePool.internalValue = value;
  }
  public resetPrivatePool() {
    this._privatePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolInput() {
    return this._privatePool.internalValue;
  }
}

export class ClouddeployTargetExecutionConfigsList extends cdktn.ComplexList {
  public internalValue? : ClouddeployTargetExecutionConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClouddeployTargetExecutionConfigsOutputReference {
    return new ClouddeployTargetExecutionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployTargetGke {
  /**
  * Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}
  */
  readonly cluster?: string;
  /**
  * Optional. If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#dns_endpoint ClouddeployTarget#dns_endpoint}
  */
  readonly dnsEndpoint?: boolean | cdktn.IResolvable;
  /**
  * Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}
  */
  readonly internalIp?: boolean | cdktn.IResolvable;
  /**
  * Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}
  */
  readonly proxyUrl?: string;
}

export function clouddeployTargetGkeToTerraform(struct?: ClouddeployTargetGkeOutputReference | ClouddeployTargetGke): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster: cdktn.stringToTerraform(struct!.cluster),
    dns_endpoint: cdktn.booleanToTerraform(struct!.dnsEndpoint),
    internal_ip: cdktn.booleanToTerraform(struct!.internalIp),
    proxy_url: cdktn.stringToTerraform(struct!.proxyUrl),
  }
}


export function clouddeployTargetGkeToHclTerraform(struct?: ClouddeployTargetGkeOutputReference | ClouddeployTargetGke): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster: {
      value: cdktn.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_endpoint: {
      value: cdktn.booleanToHclTerraform(struct!.dnsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_ip: {
      value: cdktn.booleanToHclTerraform(struct!.internalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktn.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetGkeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._dnsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsEndpoint = this._dnsEndpoint;
    }
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._dnsEndpoint = undefined;
      this._internalIp = undefined;
      this._proxyUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._dnsEndpoint = value.dnsEndpoint;
      this._internalIp = value.internalIp;
      this._proxyUrl = value.proxyUrl;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // dns_endpoint - computed: false, optional: true, required: false
  private _dnsEndpoint?: boolean | cdktn.IResolvable; 
  public get dnsEndpoint() {
    return this.getBooleanAttribute('dns_endpoint');
  }
  public set dnsEndpoint(value: boolean | cdktn.IResolvable) {
    this._dnsEndpoint = value;
  }
  public resetDnsEndpoint() {
    this._dnsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEndpointInput() {
    return this._dnsEndpoint;
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: boolean | cdktn.IResolvable; 
  public get internalIp() {
    return this.getBooleanAttribute('internal_ip');
  }
  public set internalIp(value: boolean | cdktn.IResolvable) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }
}
export interface ClouddeployTargetMultiTarget {
  /**
  * Required. The target_ids of this multiTarget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#target_ids ClouddeployTarget#target_ids}
  */
  readonly targetIds: string[];
}

export function clouddeployTargetMultiTargetToTerraform(struct?: ClouddeployTargetMultiTargetOutputReference | ClouddeployTargetMultiTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetIds),
  }
}


export function clouddeployTargetMultiTargetToHclTerraform(struct?: ClouddeployTargetMultiTargetOutputReference | ClouddeployTargetMultiTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetMultiTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetMultiTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIds = this._targetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetMultiTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetIds = value.targetIds;
    }
  }

  // target_ids - computed: false, optional: false, required: true
  private _targetIds?: string[]; 
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }
}
export interface ClouddeployTargetRun {
  /**
  * Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#location ClouddeployTarget#location}
  */
  readonly location: string;
}

export function clouddeployTargetRunToTerraform(struct?: ClouddeployTargetRunOutputReference | ClouddeployTargetRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function clouddeployTargetRunToHclTerraform(struct?: ClouddeployTargetRunOutputReference | ClouddeployTargetRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface ClouddeployTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#create ClouddeployTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#update ClouddeployTarget#update}
  */
  readonly update?: string;
}

export function clouddeployTargetTimeoutsToTerraform(struct?: ClouddeployTargetTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function clouddeployTargetTimeoutsToHclTerraform(struct?: ClouddeployTargetTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployTargetTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClouddeployTargetTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target google_clouddeploy_target}
*/
export class ClouddeployTarget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ClouddeployTarget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClouddeployTarget to import
  * @param importFromId The id of the existing ClouddeployTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClouddeployTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/clouddeploy_target google_clouddeploy_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClouddeployTargetConfig
  */
  public constructor(scope: Construct, id: string, config: ClouddeployTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_target',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._deployParameters = config.deployParameters;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._requireApproval = config.requireApproval;
    this._anthosCluster.internalValue = config.anthosCluster;
    this._associatedEntities.internalValue = config.associatedEntities;
    this._customTarget.internalValue = config.customTarget;
    this._executionConfigs.internalValue = config.executionConfigs;
    this._gke.internalValue = config.gke;
    this._multiTarget.internalValue = config.multiTarget;
    this._run.internalValue = config.run;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // deploy_parameters - computed: false, optional: true, required: false
  private _deployParameters?: { [key: string]: string }; 
  public get deployParameters() {
    return this.getStringMapAttribute('deploy_parameters');
  }
  public set deployParameters(value: { [key: string]: string }) {
    this._deployParameters = value;
  }
  public resetDeployParameters() {
    this._deployParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParametersInput() {
    return this._deployParameters;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // require_approval - computed: false, optional: true, required: false
  private _requireApproval?: boolean | cdktn.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktn.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // anthos_cluster - computed: false, optional: true, required: false
  private _anthosCluster = new ClouddeployTargetAnthosClusterOutputReference(this, "anthos_cluster");
  public get anthosCluster() {
    return this._anthosCluster;
  }
  public putAnthosCluster(value: ClouddeployTargetAnthosCluster) {
    this._anthosCluster.internalValue = value;
  }
  public resetAnthosCluster() {
    this._anthosCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthosClusterInput() {
    return this._anthosCluster.internalValue;
  }

  // associated_entities - computed: false, optional: true, required: false
  private _associatedEntities = new ClouddeployTargetAssociatedEntitiesList(this, "associated_entities", true);
  public get associatedEntities() {
    return this._associatedEntities;
  }
  public putAssociatedEntities(value: ClouddeployTargetAssociatedEntities[] | cdktn.IResolvable) {
    this._associatedEntities.internalValue = value;
  }
  public resetAssociatedEntities() {
    this._associatedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedEntitiesInput() {
    return this._associatedEntities.internalValue;
  }

  // custom_target - computed: false, optional: true, required: false
  private _customTarget = new ClouddeployTargetCustomTargetOutputReference(this, "custom_target");
  public get customTarget() {
    return this._customTarget;
  }
  public putCustomTarget(value: ClouddeployTargetCustomTarget) {
    this._customTarget.internalValue = value;
  }
  public resetCustomTarget() {
    this._customTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTargetInput() {
    return this._customTarget.internalValue;
  }

  // execution_configs - computed: false, optional: true, required: false
  private _executionConfigs = new ClouddeployTargetExecutionConfigsList(this, "execution_configs", false);
  public get executionConfigs() {
    return this._executionConfigs;
  }
  public putExecutionConfigs(value: ClouddeployTargetExecutionConfigs[] | cdktn.IResolvable) {
    this._executionConfigs.internalValue = value;
  }
  public resetExecutionConfigs() {
    this._executionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionConfigsInput() {
    return this._executionConfigs.internalValue;
  }

  // gke - computed: false, optional: true, required: false
  private _gke = new ClouddeployTargetGkeOutputReference(this, "gke");
  public get gke() {
    return this._gke;
  }
  public putGke(value: ClouddeployTargetGke) {
    this._gke.internalValue = value;
  }
  public resetGke() {
    this._gke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeInput() {
    return this._gke.internalValue;
  }

  // multi_target - computed: false, optional: true, required: false
  private _multiTarget = new ClouddeployTargetMultiTargetOutputReference(this, "multi_target");
  public get multiTarget() {
    return this._multiTarget;
  }
  public putMultiTarget(value: ClouddeployTargetMultiTarget) {
    this._multiTarget.internalValue = value;
  }
  public resetMultiTarget() {
    this._multiTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTargetInput() {
    return this._multiTarget.internalValue;
  }

  // run - computed: false, optional: true, required: false
  private _run = new ClouddeployTargetRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: ClouddeployTargetRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClouddeployTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClouddeployTargetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deploy_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._deployParameters),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      require_approval: cdktn.booleanToTerraform(this._requireApproval),
      anthos_cluster: clouddeployTargetAnthosClusterToTerraform(this._anthosCluster.internalValue),
      associated_entities: cdktn.listMapper(clouddeployTargetAssociatedEntitiesToTerraform, true)(this._associatedEntities.internalValue),
      custom_target: clouddeployTargetCustomTargetToTerraform(this._customTarget.internalValue),
      execution_configs: cdktn.listMapper(clouddeployTargetExecutionConfigsToTerraform, true)(this._executionConfigs.internalValue),
      gke: clouddeployTargetGkeToTerraform(this._gke.internalValue),
      multi_target: clouddeployTargetMultiTargetToTerraform(this._multiTarget.internalValue),
      run: clouddeployTargetRunToTerraform(this._run.internalValue),
      timeouts: clouddeployTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._deployParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_approval: {
        value: cdktn.booleanToHclTerraform(this._requireApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anthos_cluster: {
        value: clouddeployTargetAnthosClusterToHclTerraform(this._anthosCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployTargetAnthosClusterList",
      },
      associated_entities: {
        value: cdktn.listMapperHcl(clouddeployTargetAssociatedEntitiesToHclTerraform, true)(this._associatedEntities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClouddeployTargetAssociatedEntitiesList",
      },
      custom_target: {
        value: clouddeployTargetCustomTargetToHclTerraform(this._customTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployTargetCustomTargetList",
      },
      execution_configs: {
        value: cdktn.listMapperHcl(clouddeployTargetExecutionConfigsToHclTerraform, true)(this._executionConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployTargetExecutionConfigsList",
      },
      gke: {
        value: clouddeployTargetGkeToHclTerraform(this._gke.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployTargetGkeList",
      },
      multi_target: {
        value: clouddeployTargetMultiTargetToHclTerraform(this._multiTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployTargetMultiTargetList",
      },
      run: {
        value: clouddeployTargetRunToHclTerraform(this._run.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployTargetRunList",
      },
      timeouts: {
        value: clouddeployTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClouddeployTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
