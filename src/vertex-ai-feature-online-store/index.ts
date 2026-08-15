/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiFeatureOnlineStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#deletion_policy VertexAiFeatureOnlineStore#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#force_destroy VertexAiFeatureOnlineStore#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize your feature online stores.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#labels VertexAiFeatureOnlineStore#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#name VertexAiFeatureOnlineStore#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}
  */
  readonly project?: string;
  /**
  * The region of feature online store. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#region VertexAiFeatureOnlineStore#region}
  */
  readonly region?: string;
  /**
  * bigtable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#bigtable VertexAiFeatureOnlineStore#bigtable}
  */
  readonly bigtable?: VertexAiFeatureOnlineStoreBigtable;
  /**
  * dedicated_serving_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#dedicated_serving_endpoint VertexAiFeatureOnlineStore#dedicated_serving_endpoint}
  */
  readonly dedicatedServingEndpoint?: VertexAiFeatureOnlineStoreDedicatedServingEndpoint;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#encryption_spec VertexAiFeatureOnlineStore#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiFeatureOnlineStoreEncryptionSpec;
  /**
  * optimized block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#optimized VertexAiFeatureOnlineStore#optimized}
  */
  readonly optimized?: VertexAiFeatureOnlineStoreOptimized;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#timeouts VertexAiFeatureOnlineStore#timeouts}
  */
  readonly timeouts?: VertexAiFeatureOnlineStoreTimeouts;
}
export interface VertexAiFeatureOnlineStoreBigtableAutoScaling {
  /**
  * A percentage of the cluster's CPU capacity. Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#cpu_utilization_target VertexAiFeatureOnlineStore#cpu_utilization_target}
  */
  readonly cpuUtilizationTarget?: number;
  /**
  * The maximum number of nodes to scale up to. Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#max_node_count VertexAiFeatureOnlineStore#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * The minimum number of nodes to scale down to. Must be greater than or equal to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#min_node_count VertexAiFeatureOnlineStore#min_node_count}
  */
  readonly minNodeCount: number;
}

export function vertexAiFeatureOnlineStoreBigtableAutoScalingToTerraform(struct?: VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference | VertexAiFeatureOnlineStoreBigtableAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu_utilization_target: cdktn.numberToTerraform(struct!.cpuUtilizationTarget),
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
  }
}


export function vertexAiFeatureOnlineStoreBigtableAutoScalingToHclTerraform(struct?: VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference | VertexAiFeatureOnlineStoreBigtableAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu_utilization_target: {
      value: cdktn.numberToHclTerraform(struct!.cpuUtilizationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreBigtableAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationTarget = this._cpuUtilizationTarget;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreBigtableAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationTarget = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationTarget = value.cpuUtilizationTarget;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // cpu_utilization_target - computed: true, optional: true, required: false
  private _cpuUtilizationTarget?: number; 
  public get cpuUtilizationTarget() {
    return this.getNumberAttribute('cpu_utilization_target');
  }
  public set cpuUtilizationTarget(value: number) {
    this._cpuUtilizationTarget = value;
  }
  public resetCpuUtilizationTarget() {
    this._cpuUtilizationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationTargetInput() {
    return this._cpuUtilizationTarget;
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface VertexAiFeatureOnlineStoreBigtable {
  /**
  * Optional. If true, enable direct access to the Bigtable instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#enable_direct_bigtable_access VertexAiFeatureOnlineStore#enable_direct_bigtable_access}
  */
  readonly enableDirectBigtableAccess?: boolean | cdktn.IResolvable;
  /**
  * The zone where the Bigtable instance will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#zone VertexAiFeatureOnlineStore#zone}
  */
  readonly zone?: string;
  /**
  * auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#auto_scaling VertexAiFeatureOnlineStore#auto_scaling}
  */
  readonly autoScaling: VertexAiFeatureOnlineStoreBigtableAutoScaling;
}

export function vertexAiFeatureOnlineStoreBigtableToTerraform(struct?: VertexAiFeatureOnlineStoreBigtableOutputReference | VertexAiFeatureOnlineStoreBigtable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_direct_bigtable_access: cdktn.booleanToTerraform(struct!.enableDirectBigtableAccess),
    zone: cdktn.stringToTerraform(struct!.zone),
    auto_scaling: vertexAiFeatureOnlineStoreBigtableAutoScalingToTerraform(struct!.autoScaling),
  }
}


export function vertexAiFeatureOnlineStoreBigtableToHclTerraform(struct?: VertexAiFeatureOnlineStoreBigtableOutputReference | VertexAiFeatureOnlineStoreBigtable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_direct_bigtable_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableDirectBigtableAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling: {
      value: vertexAiFeatureOnlineStoreBigtableAutoScalingToHclTerraform(struct!.autoScaling),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiFeatureOnlineStoreBigtableAutoScalingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreBigtableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreBigtable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDirectBigtableAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDirectBigtableAccess = this._enableDirectBigtableAccess;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._autoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreBigtable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDirectBigtableAccess = undefined;
      this._zone = undefined;
      this._autoScaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDirectBigtableAccess = value.enableDirectBigtableAccess;
      this._zone = value.zone;
      this._autoScaling.internalValue = value.autoScaling;
    }
  }

  // enable_direct_bigtable_access - computed: false, optional: true, required: false
  private _enableDirectBigtableAccess?: boolean | cdktn.IResolvable; 
  public get enableDirectBigtableAccess() {
    return this.getBooleanAttribute('enable_direct_bigtable_access');
  }
  public set enableDirectBigtableAccess(value: boolean | cdktn.IResolvable) {
    this._enableDirectBigtableAccess = value;
  }
  public resetEnableDirectBigtableAccess() {
    this._enableDirectBigtableAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDirectBigtableAccessInput() {
    return this._enableDirectBigtableAccess;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // auto_scaling - computed: false, optional: false, required: true
  private _autoScaling = new VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: VertexAiFeatureOnlineStoreBigtableAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }
}
export interface VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig {
  /**
  * If set to true, customers will use private service connection to send request. Otherwise, the connection will set to public endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#enable_private_service_connect VertexAiFeatureOnlineStore#enable_private_service_connect}
  */
  readonly enablePrivateServiceConnect: boolean | cdktn.IResolvable;
  /**
  * A list of Projects from which the forwarding rule will target the service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#project_allowlist VertexAiFeatureOnlineStore#project_allowlist}
  */
  readonly projectAllowlist?: string[];
}

export function vertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigToTerraform(struct?: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference | VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_private_service_connect: cdktn.booleanToTerraform(struct!.enablePrivateServiceConnect),
    project_allowlist: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectAllowlist),
  }
}


export function vertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigToHclTerraform(struct?: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference | VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_private_service_connect: {
      value: cdktn.booleanToHclTerraform(struct!.enablePrivateServiceConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_allowlist: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectAllowlist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateServiceConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateServiceConnect = this._enablePrivateServiceConnect;
    }
    if (this._projectAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectAllowlist = this._projectAllowlist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateServiceConnect = undefined;
      this._projectAllowlist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateServiceConnect = value.enablePrivateServiceConnect;
      this._projectAllowlist = value.projectAllowlist;
    }
  }

  // enable_private_service_connect - computed: false, optional: false, required: true
  private _enablePrivateServiceConnect?: boolean | cdktn.IResolvable; 
  public get enablePrivateServiceConnect() {
    return this.getBooleanAttribute('enable_private_service_connect');
  }
  public set enablePrivateServiceConnect(value: boolean | cdktn.IResolvable) {
    this._enablePrivateServiceConnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateServiceConnectInput() {
    return this._enablePrivateServiceConnect;
  }

  // project_allowlist - computed: false, optional: true, required: false
  private _projectAllowlist?: string[]; 
  public get projectAllowlist() {
    return this.getListAttribute('project_allowlist');
  }
  public set projectAllowlist(value: string[]) {
    this._projectAllowlist = value;
  }
  public resetProjectAllowlist() {
    this._projectAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAllowlistInput() {
    return this._projectAllowlist;
  }
}
export interface VertexAiFeatureOnlineStoreDedicatedServingEndpoint {
  /**
  * private_service_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#private_service_connect_config VertexAiFeatureOnlineStore#private_service_connect_config}
  */
  readonly privateServiceConnectConfig?: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;
}

export function vertexAiFeatureOnlineStoreDedicatedServingEndpointToTerraform(struct?: VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference | VertexAiFeatureOnlineStoreDedicatedServingEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_service_connect_config: vertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigToTerraform(struct!.privateServiceConnectConfig),
  }
}


export function vertexAiFeatureOnlineStoreDedicatedServingEndpointToHclTerraform(struct?: VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference | VertexAiFeatureOnlineStoreDedicatedServingEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_service_connect_config: {
      value: vertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigToHclTerraform(struct!.privateServiceConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreDedicatedServingEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateServiceConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnectConfig = this._privateServiceConnectConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreDedicatedServingEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateServiceConnectConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateServiceConnectConfig.internalValue = value.privateServiceConnectConfig;
    }
  }

  // public_endpoint_domain_name - computed: true, optional: false, required: false
  public get publicEndpointDomainName() {
    return this.getStringAttribute('public_endpoint_domain_name');
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }

  // private_service_connect_config - computed: false, optional: true, required: false
  private _privateServiceConnectConfig = new VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference(this, "private_service_connect_config");
  public get privateServiceConnectConfig() {
    return this._privateServiceConnectConfig;
  }
  public putPrivateServiceConnectConfig(value: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig) {
    this._privateServiceConnectConfig.internalValue = value;
  }
  public resetPrivateServiceConnectConfig() {
    this._privateServiceConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectConfigInput() {
    return this._privateServiceConnectConfig.internalValue;
  }
}
export interface VertexAiFeatureOnlineStoreEncryptionSpec {
  /**
  * The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#kms_key_name VertexAiFeatureOnlineStore#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiFeatureOnlineStoreEncryptionSpecToTerraform(struct?: VertexAiFeatureOnlineStoreEncryptionSpecOutputReference | VertexAiFeatureOnlineStoreEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiFeatureOnlineStoreEncryptionSpecToHclTerraform(struct?: VertexAiFeatureOnlineStoreEncryptionSpecOutputReference | VertexAiFeatureOnlineStoreEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiFeatureOnlineStoreOptimized {
}

export function vertexAiFeatureOnlineStoreOptimizedToTerraform(struct?: VertexAiFeatureOnlineStoreOptimizedOutputReference | VertexAiFeatureOnlineStoreOptimized): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiFeatureOnlineStoreOptimizedToHclTerraform(struct?: VertexAiFeatureOnlineStoreOptimizedOutputReference | VertexAiFeatureOnlineStoreOptimized): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiFeatureOnlineStoreOptimizedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreOptimized | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreOptimized | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiFeatureOnlineStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}
  */
  readonly update?: string;
}

export function vertexAiFeatureOnlineStoreTimeoutsToTerraform(struct?: VertexAiFeatureOnlineStoreTimeouts | cdktn.IResolvable): any {
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


export function vertexAiFeatureOnlineStoreTimeoutsToHclTerraform(struct?: VertexAiFeatureOnlineStoreTimeouts | cdktn.IResolvable): any {
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

export class VertexAiFeatureOnlineStoreTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiFeatureOnlineStoreTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store google_vertex_ai_feature_online_store}
*/
export class VertexAiFeatureOnlineStore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_feature_online_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiFeatureOnlineStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiFeatureOnlineStore to import
  * @param importFromId The id of the existing VertexAiFeatureOnlineStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiFeatureOnlineStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_feature_online_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vertex_ai_feature_online_store google_vertex_ai_feature_online_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiFeatureOnlineStoreConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiFeatureOnlineStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_feature_online_store',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._bigtable.internalValue = config.bigtable;
    this._dedicatedServingEndpoint.internalValue = config.dedicatedServingEndpoint;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._optimized.internalValue = config.optimized;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // bigtable - computed: false, optional: true, required: false
  private _bigtable = new VertexAiFeatureOnlineStoreBigtableOutputReference(this, "bigtable");
  public get bigtable() {
    return this._bigtable;
  }
  public putBigtable(value: VertexAiFeatureOnlineStoreBigtable) {
    this._bigtable.internalValue = value;
  }
  public resetBigtable() {
    this._bigtable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigtableInput() {
    return this._bigtable.internalValue;
  }

  // dedicated_serving_endpoint - computed: false, optional: true, required: false
  private _dedicatedServingEndpoint = new VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference(this, "dedicated_serving_endpoint");
  public get dedicatedServingEndpoint() {
    return this._dedicatedServingEndpoint;
  }
  public putDedicatedServingEndpoint(value: VertexAiFeatureOnlineStoreDedicatedServingEndpoint) {
    this._dedicatedServingEndpoint.internalValue = value;
  }
  public resetDedicatedServingEndpoint() {
    this._dedicatedServingEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedServingEndpointInput() {
    return this._dedicatedServingEndpoint.internalValue;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiFeatureOnlineStoreEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiFeatureOnlineStoreEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // optimized - computed: false, optional: true, required: false
  private _optimized = new VertexAiFeatureOnlineStoreOptimizedOutputReference(this, "optimized");
  public get optimized() {
    return this._optimized;
  }
  public putOptimized(value: VertexAiFeatureOnlineStoreOptimized) {
    this._optimized.internalValue = value;
  }
  public resetOptimized() {
    this._optimized.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedInput() {
    return this._optimized.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiFeatureOnlineStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiFeatureOnlineStoreTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      bigtable: vertexAiFeatureOnlineStoreBigtableToTerraform(this._bigtable.internalValue),
      dedicated_serving_endpoint: vertexAiFeatureOnlineStoreDedicatedServingEndpointToTerraform(this._dedicatedServingEndpoint.internalValue),
      encryption_spec: vertexAiFeatureOnlineStoreEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      optimized: vertexAiFeatureOnlineStoreOptimizedToTerraform(this._optimized.internalValue),
      timeouts: vertexAiFeatureOnlineStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigtable: {
        value: vertexAiFeatureOnlineStoreBigtableToHclTerraform(this._bigtable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeatureOnlineStoreBigtableList",
      },
      dedicated_serving_endpoint: {
        value: vertexAiFeatureOnlineStoreDedicatedServingEndpointToHclTerraform(this._dedicatedServingEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeatureOnlineStoreDedicatedServingEndpointList",
      },
      encryption_spec: {
        value: vertexAiFeatureOnlineStoreEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeatureOnlineStoreEncryptionSpecList",
      },
      optimized: {
        value: vertexAiFeatureOnlineStoreOptimizedToHclTerraform(this._optimized.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeatureOnlineStoreOptimizedList",
      },
      timeouts: {
        value: vertexAiFeatureOnlineStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiFeatureOnlineStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
