/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataFusionInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}
  */
  readonly dataprocServiceAccount?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#deletion_policy DataFusionInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#description DataFusionInstance#description}
  */
  readonly description?: string;
  /**
  * Display name for an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#display_name DataFusionInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Option to enable granular role-based access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#enable_rbac DataFusionInstance#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktn.IResolvable;
  /**
  * Option to enable Stackdriver Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktn.IResolvable;
  /**
  * Option to enable Stackdriver Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}
  */
  readonly enableStackdriverMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#id DataFusionInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource labels for instance to use to annotate any related underlying resources,
  * such as Compute Engine VMs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#labels DataFusionInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#name DataFusionInstance#name}
  */
  readonly name: string;
  /**
  * Map of additional options used to configure the behavior of Data Fusion instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#options DataFusionInstance#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Current patch revision of the Data Fusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#patch_revision DataFusionInstance#patch_revision}
  */
  readonly patchRevision?: string;
  /**
  * Specifies whether the Data Fusion instance should be private. If set to
  * true, all Data Fusion nodes will have private IP addresses and will not be
  * able to access the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#private_instance DataFusionInstance#private_instance}
  */
  readonly privateInstance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#project DataFusionInstance#project}
  */
  readonly project?: string;
  /**
  * The region of the Data Fusion instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#region DataFusionInstance#region}
  */
  readonly region?: string;
  /**
  * A map of resource manager tags.
  * Resource manager tag keys and values have the same definition as resource manager tags.
  * Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.
  * The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#tags DataFusionInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Represents the type of Data Fusion instance. Each type is configured with
  * the default settings for processing and memory.
  * - BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  * using point and click UI. However, there are certain limitations, such as fewer number
  * of concurrent pipelines, no support for streaming pipelines, etc.
  * - ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  * available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
  * - DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  * with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  * pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#type DataFusionInstance#type}
  */
  readonly type: string;
  /**
  * Current version of the Data Fusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#version DataFusionInstance#version}
  */
  readonly version?: string;
  /**
  * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#zone DataFusionInstance#zone}
  */
  readonly zone?: string;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#accelerators DataFusionInstance#accelerators}
  */
  readonly accelerators?: DataFusionInstanceAccelerators[] | cdktn.IResolvable;
  /**
  * crypto_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#crypto_key_config DataFusionInstance#crypto_key_config}
  */
  readonly cryptoKeyConfig?: DataFusionInstanceCryptoKeyConfig;
  /**
  * event_publish_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#event_publish_config DataFusionInstance#event_publish_config}
  */
  readonly eventPublishConfig?: DataFusionInstanceEventPublishConfig;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#maintenance_policy DataFusionInstance#maintenance_policy}
  */
  readonly maintenancePolicy?: DataFusionInstanceMaintenancePolicy;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#network_config DataFusionInstance#network_config}
  */
  readonly networkConfig?: DataFusionInstanceNetworkConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#timeouts DataFusionInstance#timeouts}
  */
  readonly timeouts?: DataFusionInstanceTimeouts;
}
export interface DataFusionInstanceMaintenanceEvents {
}

export function dataFusionInstanceMaintenanceEventsToTerraform(struct?: DataFusionInstanceMaintenanceEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataFusionInstanceMaintenanceEventsToHclTerraform(struct?: DataFusionInstanceMaintenanceEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFusionInstanceMaintenanceEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFusionInstanceMaintenanceEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceMaintenanceEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataFusionInstanceMaintenanceEventsList extends cdktn.ComplexList {

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
  public get(index: number): DataFusionInstanceMaintenanceEventsOutputReference {
    return new DataFusionInstanceMaintenanceEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFusionInstanceAccelerators {
  /**
  * The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#accelerator_type DataFusionInstance#accelerator_type}
  */
  readonly acceleratorType: string;
  /**
  * The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#state DataFusionInstance#state}
  */
  readonly state: string;
}

export function dataFusionInstanceAcceleratorsToTerraform(struct?: DataFusionInstanceAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function dataFusionInstanceAcceleratorsToHclTerraform(struct?: DataFusionInstanceAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_type: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceAcceleratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataFusionInstanceAccelerators | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceAccelerators | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._state = value.state;
    }
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataFusionInstanceAcceleratorsList extends cdktn.ComplexList {
  public internalValue? : DataFusionInstanceAccelerators[] | cdktn.IResolvable

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
  public get(index: number): DataFusionInstanceAcceleratorsOutputReference {
    return new DataFusionInstanceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFusionInstanceCryptoKeyConfig {
  /**
  * The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#key_reference DataFusionInstance#key_reference}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly keyReference: string;
}

export function dataFusionInstanceCryptoKeyConfigToTerraform(struct?: DataFusionInstanceCryptoKeyConfigOutputReference | DataFusionInstanceCryptoKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_reference: cdktn.stringToTerraform(struct!.keyReference),
  }
}


export function dataFusionInstanceCryptoKeyConfigToHclTerraform(struct?: DataFusionInstanceCryptoKeyConfigOutputReference | DataFusionInstanceCryptoKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_reference: {
      value: cdktn.stringToHclTerraform(struct!.keyReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceCryptoKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceCryptoKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyReference = this._keyReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceCryptoKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyReference = value.keyReference;
    }
  }

  // key_reference - computed: false, optional: false, required: true
  private _keyReference?: string; 
  public get keyReference() {
    return this.getStringAttribute('key_reference');
  }
  public set keyReference(value: string) {
    this._keyReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyReferenceInput() {
    return this._keyReference;
  }
}
export interface DataFusionInstanceEventPublishConfig {
  /**
  * Option to enable Event Publishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#enabled DataFusionInstance#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#topic DataFusionInstance#topic}
  */
  readonly topic: string;
}

export function dataFusionInstanceEventPublishConfigToTerraform(struct?: DataFusionInstanceEventPublishConfigOutputReference | DataFusionInstanceEventPublishConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function dataFusionInstanceEventPublishConfigToHclTerraform(struct?: DataFusionInstanceEventPublishConfigOutputReference | DataFusionInstanceEventPublishConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceEventPublishConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceEventPublishConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceEventPublishConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow {
  /**
  * The end time of the time window provided in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#end_time DataFusionInstance#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the time window provided in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#start_time DataFusionInstance#start_time}
  */
  readonly startTime: string;
}

export function dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowToTerraform(struct?: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference | DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowToHclTerraform(struct?: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference | DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow {
  /**
  * An RRULE with format RFC-5545 for how this window reccurs. They go on for the span of time between the start and end time. The only supported FREQ value is "WEEKLY". To have something repeat every weekday, use: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#recurrence DataFusionInstance#recurrence}
  */
  readonly recurrence: string;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#window DataFusionInstance#window}
  */
  readonly window: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow;
}

export function dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowToTerraform(struct?: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference | DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recurrence: cdktn.stringToTerraform(struct!.recurrence),
    window: dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowToTerraform(struct!.window),
  }
}


export function dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowToHclTerraform(struct?: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference | DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recurrence: {
      value: cdktn.stringToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "list",
      storageClassType: "DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrence = undefined;
      this._window.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrence = value.recurrence;
      this._window.internalValue = value.window;
    }
  }

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // window - computed: false, optional: false, required: true
  private _window = new DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow) {
    this._window.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}
export interface DataFusionInstanceMaintenancePolicyMaintenanceWindow {
  /**
  * recurring_time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#recurring_time_window DataFusionInstance#recurring_time_window}
  */
  readonly recurringTimeWindow: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow;
}

export function dataFusionInstanceMaintenancePolicyMaintenanceWindowToTerraform(struct?: DataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference | DataFusionInstanceMaintenancePolicyMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recurring_time_window: dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowToTerraform(struct!.recurringTimeWindow),
  }
}


export function dataFusionInstanceMaintenancePolicyMaintenanceWindowToHclTerraform(struct?: DataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference | DataFusionInstanceMaintenancePolicyMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recurring_time_window: {
      value: dataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowToHclTerraform(struct!.recurringTimeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceMaintenancePolicyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurringTimeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTimeWindow = this._recurringTimeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceMaintenancePolicyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurringTimeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurringTimeWindow.internalValue = value.recurringTimeWindow;
    }
  }

  // recurring_time_window - computed: false, optional: false, required: true
  private _recurringTimeWindow = new DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference(this, "recurring_time_window");
  public get recurringTimeWindow() {
    return this._recurringTimeWindow;
  }
  public putRecurringTimeWindow(value: DataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow) {
    this._recurringTimeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeWindowInput() {
    return this._recurringTimeWindow.internalValue;
  }
}
export interface DataFusionInstanceMaintenancePolicy {
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#maintenance_window DataFusionInstance#maintenance_window}
  */
  readonly maintenanceWindow?: DataFusionInstanceMaintenancePolicyMaintenanceWindow;
}

export function dataFusionInstanceMaintenancePolicyToTerraform(struct?: DataFusionInstanceMaintenancePolicyOutputReference | DataFusionInstanceMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maintenance_window: dataFusionInstanceMaintenancePolicyMaintenanceWindowToTerraform(struct!.maintenanceWindow),
  }
}


export function dataFusionInstanceMaintenancePolicyToHclTerraform(struct?: DataFusionInstanceMaintenancePolicyOutputReference | DataFusionInstanceMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maintenance_window: {
      value: dataFusionInstanceMaintenancePolicyMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "DataFusionInstanceMaintenancePolicyMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataFusionInstanceMaintenancePolicyMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface DataFusionInstanceNetworkConfigPrivateServiceConnectConfig {
  /**
  * Optional. The reference to the network attachment used to establish private connectivity.
  * It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
  * This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#network_attachment DataFusionInstance#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * Optional. Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
  * The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
  * This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
  * If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#unreachable_cidr_block DataFusionInstance#unreachable_cidr_block}
  */
  readonly unreachableCidrBlock?: string;
}

export function dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToTerraform(struct?: DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference | DataFusionInstanceNetworkConfigPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    unreachable_cidr_block: cdktn.stringToTerraform(struct!.unreachableCidrBlock),
  }
}


export function dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToHclTerraform(struct?: DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference | DataFusionInstanceNetworkConfigPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unreachable_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.unreachableCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceNetworkConfigPrivateServiceConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._unreachableCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreachableCidrBlock = this._unreachableCidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._unreachableCidrBlock = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._unreachableCidrBlock = value.unreachableCidrBlock;
    }
  }

  // effective_unreachable_cidr_block - computed: true, optional: false, required: false
  public get effectiveUnreachableCidrBlock() {
    return this.getStringAttribute('effective_unreachable_cidr_block');
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // unreachable_cidr_block - computed: false, optional: true, required: false
  private _unreachableCidrBlock?: string; 
  public get unreachableCidrBlock() {
    return this.getStringAttribute('unreachable_cidr_block');
  }
  public set unreachableCidrBlock(value: string) {
    this._unreachableCidrBlock = value;
  }
  public resetUnreachableCidrBlock() {
    this._unreachableCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableCidrBlockInput() {
    return this._unreachableCidrBlock;
  }
}
export interface DataFusionInstanceNetworkConfig {
  /**
  * Optional. Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
  * the corresponding tenant project from a predefined list of available connection modes.
  * If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#connection_type DataFusionInstance#connection_type}
  */
  readonly connectionType?: string;
  /**
  * The IP range in CIDR notation to use for the managed Data Fusion instance
  * nodes. This range must not overlap with any other ranges used in the Data Fusion instance network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}
  */
  readonly ipAllocation?: string;
  /**
  * Name of the network in the project with which the tenant project
  * will be peered for executing pipelines. In case of shared VPC where the network resides in another host
  * project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#network DataFusionInstance#network}
  */
  readonly network?: string;
  /**
  * private_service_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#private_service_connect_config DataFusionInstance#private_service_connect_config}
  */
  readonly privateServiceConnectConfig?: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
}

export function dataFusionInstanceNetworkConfigToTerraform(struct?: DataFusionInstanceNetworkConfigOutputReference | DataFusionInstanceNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_type: cdktn.stringToTerraform(struct!.connectionType),
    ip_allocation: cdktn.stringToTerraform(struct!.ipAllocation),
    network: cdktn.stringToTerraform(struct!.network),
    private_service_connect_config: dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToTerraform(struct!.privateServiceConnectConfig),
  }
}


export function dataFusionInstanceNetworkConfigToHclTerraform(struct?: DataFusionInstanceNetworkConfigOutputReference | DataFusionInstanceNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_type: {
      value: cdktn.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_allocation: {
      value: cdktn.stringToHclTerraform(struct!.ipAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_service_connect_config: {
      value: dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToHclTerraform(struct!.privateServiceConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataFusionInstanceNetworkConfigPrivateServiceConnectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._ipAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocation = this._ipAllocation;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._privateServiceConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnectConfig = this._privateServiceConnectConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._ipAllocation = undefined;
      this._network = undefined;
      this._privateServiceConnectConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._ipAllocation = value.ipAllocation;
      this._network = value.network;
      this._privateServiceConnectConfig.internalValue = value.privateServiceConnectConfig;
    }
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // ip_allocation - computed: false, optional: true, required: false
  private _ipAllocation?: string; 
  public get ipAllocation() {
    return this.getStringAttribute('ip_allocation');
  }
  public set ipAllocation(value: string) {
    this._ipAllocation = value;
  }
  public resetIpAllocation() {
    this._ipAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationInput() {
    return this._ipAllocation;
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

  // private_service_connect_config - computed: false, optional: true, required: false
  private _privateServiceConnectConfig = new DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(this, "private_service_connect_config");
  public get privateServiceConnectConfig() {
    return this._privateServiceConnectConfig;
  }
  public putPrivateServiceConnectConfig(value: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig) {
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
export interface DataFusionInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#create DataFusionInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#update DataFusionInstance#update}
  */
  readonly update?: string;
}

export function dataFusionInstanceTimeoutsToTerraform(struct?: DataFusionInstanceTimeouts | cdktn.IResolvable): any {
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


export function dataFusionInstanceTimeoutsToHclTerraform(struct?: DataFusionInstanceTimeouts | cdktn.IResolvable): any {
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

export class DataFusionInstanceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFusionInstanceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataFusionInstanceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance google_data_fusion_instance}
*/
export class DataFusionInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_fusion_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataFusionInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFusionInstance to import
  * @param importFromId The id of the existing DataFusionInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFusionInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_data_fusion_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_fusion_instance google_data_fusion_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFusionInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFusionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_fusion_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._dataprocServiceAccount = config.dataprocServiceAccount;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableRbac = config.enableRbac;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._enableStackdriverMonitoring = config.enableStackdriverMonitoring;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._options = config.options;
    this._patchRevision = config.patchRevision;
    this._privateInstance = config.privateInstance;
    this._project = config.project;
    this._region = config.region;
    this._tags = config.tags;
    this._type = config.type;
    this._version = config.version;
    this._zone = config.zone;
    this._accelerators.internalValue = config.accelerators;
    this._cryptoKeyConfig.internalValue = config.cryptoKeyConfig;
    this._eventPublishConfig.internalValue = config.eventPublishConfig;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._networkConfig.internalValue = config.networkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dataproc_service_account - computed: false, optional: true, required: false
  private _dataprocServiceAccount?: string; 
  public get dataprocServiceAccount() {
    return this.getStringAttribute('dataproc_service_account');
  }
  public set dataprocServiceAccount(value: string) {
    this._dataprocServiceAccount = value;
  }
  public resetDataprocServiceAccount() {
    this._dataprocServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocServiceAccountInput() {
    return this._dataprocServiceAccount;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_rbac - computed: false, optional: true, required: false
  private _enableRbac?: boolean | cdktn.IResolvable; 
  public get enableRbac() {
    return this.getBooleanAttribute('enable_rbac');
  }
  public set enableRbac(value: boolean | cdktn.IResolvable) {
    this._enableRbac = value;
  }
  public resetEnableRbac() {
    this._enableRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacInput() {
    return this._enableRbac;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktn.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktn.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
  }

  // enable_stackdriver_monitoring - computed: false, optional: true, required: false
  private _enableStackdriverMonitoring?: boolean | cdktn.IResolvable; 
  public get enableStackdriverMonitoring() {
    return this.getBooleanAttribute('enable_stackdriver_monitoring');
  }
  public set enableStackdriverMonitoring(value: boolean | cdktn.IResolvable) {
    this._enableStackdriverMonitoring = value;
  }
  public resetEnableStackdriverMonitoring() {
    this._enableStackdriverMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverMonitoringInput() {
    return this._enableStackdriverMonitoring;
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
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

  // maintenance_events - computed: true, optional: false, required: false
  private _maintenanceEvents = new DataFusionInstanceMaintenanceEventsList(this, "maintenance_events", false);
  public get maintenanceEvents() {
    return this._maintenanceEvents;
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

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // p4_service_account - computed: true, optional: false, required: false
  public get p4ServiceAccount() {
    return this.getStringAttribute('p4_service_account');
  }

  // patch_revision - computed: true, optional: true, required: false
  private _patchRevision?: string; 
  public get patchRevision() {
    return this.getStringAttribute('patch_revision');
  }
  public set patchRevision(value: string) {
    this._patchRevision = value;
  }
  public resetPatchRevision() {
    this._patchRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchRevisionInput() {
    return this._patchRevision;
  }

  // private_instance - computed: false, optional: true, required: false
  private _privateInstance?: boolean | cdktn.IResolvable; 
  public get privateInstance() {
    return this.getBooleanAttribute('private_instance');
  }
  public set privateInstance(value: boolean | cdktn.IResolvable) {
    this._privateInstance = value;
  }
  public resetPrivateInstance() {
    this._privateInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInstanceInput() {
    return this._privateInstance;
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

  // service_endpoint - computed: true, optional: false, required: false
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_project_id - computed: true, optional: false, required: false
  public get tenantProjectId() {
    return this.getStringAttribute('tenant_project_id');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new DataFusionInstanceAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: DataFusionInstanceAccelerators[] | cdktn.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // crypto_key_config - computed: false, optional: true, required: false
  private _cryptoKeyConfig = new DataFusionInstanceCryptoKeyConfigOutputReference(this, "crypto_key_config");
  public get cryptoKeyConfig() {
    return this._cryptoKeyConfig;
  }
  public putCryptoKeyConfig(value: DataFusionInstanceCryptoKeyConfig) {
    this._cryptoKeyConfig.internalValue = value;
  }
  public resetCryptoKeyConfig() {
    this._cryptoKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyConfigInput() {
    return this._cryptoKeyConfig.internalValue;
  }

  // event_publish_config - computed: false, optional: true, required: false
  private _eventPublishConfig = new DataFusionInstanceEventPublishConfigOutputReference(this, "event_publish_config");
  public get eventPublishConfig() {
    return this._eventPublishConfig;
  }
  public putEventPublishConfig(value: DataFusionInstanceEventPublishConfig) {
    this._eventPublishConfig.internalValue = value;
  }
  public resetEventPublishConfig() {
    this._eventPublishConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishConfigInput() {
    return this._eventPublishConfig.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new DataFusionInstanceMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: DataFusionInstanceMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataFusionInstanceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataFusionInstanceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFusionInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFusionInstanceTimeouts) {
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
      dataproc_service_account: cdktn.stringToTerraform(this._dataprocServiceAccount),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enable_rbac: cdktn.booleanToTerraform(this._enableRbac),
      enable_stackdriver_logging: cdktn.booleanToTerraform(this._enableStackdriverLogging),
      enable_stackdriver_monitoring: cdktn.booleanToTerraform(this._enableStackdriverMonitoring),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      options: cdktn.hashMapper(cdktn.stringToTerraform)(this._options),
      patch_revision: cdktn.stringToTerraform(this._patchRevision),
      private_instance: cdktn.booleanToTerraform(this._privateInstance),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      version: cdktn.stringToTerraform(this._version),
      zone: cdktn.stringToTerraform(this._zone),
      accelerators: cdktn.listMapper(dataFusionInstanceAcceleratorsToTerraform, true)(this._accelerators.internalValue),
      crypto_key_config: dataFusionInstanceCryptoKeyConfigToTerraform(this._cryptoKeyConfig.internalValue),
      event_publish_config: dataFusionInstanceEventPublishConfigToTerraform(this._eventPublishConfig.internalValue),
      maintenance_policy: dataFusionInstanceMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      network_config: dataFusionInstanceNetworkConfigToTerraform(this._networkConfig.internalValue),
      timeouts: dataFusionInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataproc_service_account: {
        value: cdktn.stringToHclTerraform(this._dataprocServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rbac: {
        value: cdktn.booleanToHclTerraform(this._enableRbac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktn.booleanToHclTerraform(this._enableStackdriverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_monitoring: {
        value: cdktn.booleanToHclTerraform(this._enableStackdriverMonitoring),
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
      options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      patch_revision: {
        value: cdktn.stringToHclTerraform(this._patchRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_instance: {
        value: cdktn.booleanToHclTerraform(this._privateInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accelerators: {
        value: cdktn.listMapperHcl(dataFusionInstanceAcceleratorsToHclTerraform, true)(this._accelerators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceAcceleratorsList",
      },
      crypto_key_config: {
        value: dataFusionInstanceCryptoKeyConfigToHclTerraform(this._cryptoKeyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceCryptoKeyConfigList",
      },
      event_publish_config: {
        value: dataFusionInstanceEventPublishConfigToHclTerraform(this._eventPublishConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceEventPublishConfigList",
      },
      maintenance_policy: {
        value: dataFusionInstanceMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceMaintenancePolicyList",
      },
      network_config: {
        value: dataFusionInstanceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceNetworkConfigList",
      },
      timeouts: {
        value: dataFusionInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFusionInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
