/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface HealthcareFhirStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#complex_data_type_reference_parsing HealthcareFhirStore#complex_data_type_reference_parsing}
  */
  readonly complexDataTypeReferenceParsing?: string;
  /**
  * Identifies the dataset addressed by this request. Must be in the format
  * 'projects/{project}/locations/{location}/datasets/{dataset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#dataset HealthcareFhirStore#dataset}
  */
  readonly dataset: string;
  /**
  * If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.
  * If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
  * The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#default_search_handling_strict HealthcareFhirStore#default_search_handling_strict}
  */
  readonly defaultSearchHandlingStrict?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#deletion_policy HealthcareFhirStore#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
  * creation. The default value is false, meaning that the API will enforce referential integrity and fail the
  * requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
  * will skip referential integrity check. Consequently, operations that rely on references, such as
  * Patient.get$everything, will not return all the results if broken references exist.
  * 
  * ** Changing this property may recreate the FHIR store (removing all data) **
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}
  */
  readonly disableReferentialIntegrity?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
  * of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
  * versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
  * cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
  * attempts to read the historical versions.
  * 
  * ** Changing this property may recreate the FHIR store (removing all data) **
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}
  */
  readonly disableResourceVersioning?: boolean | cdktn.IResolvable;
  /**
  * Whether to allow the bulk import API to accept history bundles and directly insert historical resource
  * versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
  * occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
  * will fail with an error.
  * 
  * ** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * ** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#enable_history_import HealthcareFhirStore#enable_history_import}
  */
  readonly enableHistoryImport?: boolean | cdktn.IResolvable;
  /**
  * Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
  * operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
  * the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
  * logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
  * identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
  * notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#enable_update_create HealthcareFhirStore#enable_update_create}
  */
  readonly enableUpdateCreate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-supplied key-value pairs used to organize FHIR stores.
  * 
  * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
  * conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
  * 
  * Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
  * bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
  * 
  * No more than 64 labels can be associated with a given store.
  * 
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#labels HealthcareFhirStore#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name for the FhirStore.
  * 
  * ** Changing this property may recreate the FHIR store (removing all data) **
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#name HealthcareFhirStore#name}
  */
  readonly name: string;
  /**
  * The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#version HealthcareFhirStore#version}
  */
  readonly version: string;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#notification_config HealthcareFhirStore#notification_config}
  */
  readonly notificationConfig?: HealthcareFhirStoreNotificationConfig;
  /**
  * notification_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#notification_configs HealthcareFhirStore#notification_configs}
  */
  readonly notificationConfigs?: HealthcareFhirStoreNotificationConfigs[] | cdktn.IResolvable;
  /**
  * stream_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#stream_configs HealthcareFhirStore#stream_configs}
  */
  readonly streamConfigs?: HealthcareFhirStoreStreamConfigs[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#timeouts HealthcareFhirStore#timeouts}
  */
  readonly timeouts?: HealthcareFhirStoreTimeouts;
  /**
  * validation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#validation_config HealthcareFhirStore#validation_config}
  */
  readonly validationConfig?: HealthcareFhirStoreValidationConfig;
}
export interface HealthcareFhirStoreNotificationConfig {
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
  * PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
  * It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
  * was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
  * project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
  * Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function healthcareFhirStoreNotificationConfigToTerraform(struct?: HealthcareFhirStoreNotificationConfigOutputReference | HealthcareFhirStoreNotificationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pubsub_topic: cdktn.stringToTerraform(struct!.pubsubTopic),
  }
}


export function healthcareFhirStoreNotificationConfigToHclTerraform(struct?: HealthcareFhirStoreNotificationConfigOutputReference | HealthcareFhirStoreNotificationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pubsub_topic: {
      value: cdktn.stringToHclTerraform(struct!.pubsubTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreNotificationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubTopic = value.pubsubTopic;
    }
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }
}
export interface HealthcareFhirStoreNotificationConfigs {
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
  * PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
  * It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
  * was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
  * project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
  * Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}
  */
  readonly pubsubTopic: string;
  /**
  * Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.
  * Note that setting this to true does not guarantee that all resources will be sent in the format of
  * full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
  * sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
  * it needs to fetch the full resource as a separate operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#send_full_resource HealthcareFhirStore#send_full_resource}
  */
  readonly sendFullResource?: boolean | cdktn.IResolvable;
  /**
  * Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to
  * true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
  * resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
  * check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
  * resource as a separate operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#send_previous_resource_on_delete HealthcareFhirStore#send_previous_resource_on_delete}
  */
  readonly sendPreviousResourceOnDelete?: boolean | cdktn.IResolvable;
}

export function healthcareFhirStoreNotificationConfigsToTerraform(struct?: HealthcareFhirStoreNotificationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pubsub_topic: cdktn.stringToTerraform(struct!.pubsubTopic),
    send_full_resource: cdktn.booleanToTerraform(struct!.sendFullResource),
    send_previous_resource_on_delete: cdktn.booleanToTerraform(struct!.sendPreviousResourceOnDelete),
  }
}


export function healthcareFhirStoreNotificationConfigsToHclTerraform(struct?: HealthcareFhirStoreNotificationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pubsub_topic: {
      value: cdktn.stringToHclTerraform(struct!.pubsubTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_full_resource: {
      value: cdktn.booleanToHclTerraform(struct!.sendFullResource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_previous_resource_on_delete: {
      value: cdktn.booleanToHclTerraform(struct!.sendPreviousResourceOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreNotificationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HealthcareFhirStoreNotificationConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    if (this._sendFullResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendFullResource = this._sendFullResource;
    }
    if (this._sendPreviousResourceOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPreviousResourceOnDelete = this._sendPreviousResourceOnDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreNotificationConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pubsubTopic = undefined;
      this._sendFullResource = undefined;
      this._sendPreviousResourceOnDelete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pubsubTopic = value.pubsubTopic;
      this._sendFullResource = value.sendFullResource;
      this._sendPreviousResourceOnDelete = value.sendPreviousResourceOnDelete;
    }
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // send_full_resource - computed: false, optional: true, required: false
  private _sendFullResource?: boolean | cdktn.IResolvable; 
  public get sendFullResource() {
    return this.getBooleanAttribute('send_full_resource');
  }
  public set sendFullResource(value: boolean | cdktn.IResolvable) {
    this._sendFullResource = value;
  }
  public resetSendFullResource() {
    this._sendFullResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendFullResourceInput() {
    return this._sendFullResource;
  }

  // send_previous_resource_on_delete - computed: false, optional: true, required: false
  private _sendPreviousResourceOnDelete?: boolean | cdktn.IResolvable; 
  public get sendPreviousResourceOnDelete() {
    return this.getBooleanAttribute('send_previous_resource_on_delete');
  }
  public set sendPreviousResourceOnDelete(value: boolean | cdktn.IResolvable) {
    this._sendPreviousResourceOnDelete = value;
  }
  public resetSendPreviousResourceOnDelete() {
    this._sendPreviousResourceOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPreviousResourceOnDeleteInput() {
    return this._sendPreviousResourceOnDelete;
  }
}

export class HealthcareFhirStoreNotificationConfigsList extends cdktn.ComplexList {
  public internalValue? : HealthcareFhirStoreNotificationConfigs[] | cdktn.IResolvable

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
  public get(index: number): HealthcareFhirStoreNotificationConfigsOutputReference {
    return new HealthcareFhirStoreNotificationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  /**
  * Number of milliseconds for which to keep the storage for a partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#expiration_ms HealthcareFhirStore#expiration_ms}
  */
  readonly expirationMs?: string;
  /**
  * Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#type HealthcareFhirStore#type}
  */
  readonly type: string;
}

export function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expiration_ms: cdktn.stringToTerraform(struct!.expirationMs),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigToHclTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expiration_ms: {
      value: cdktn.stringToHclTerraform(struct!.expirationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationMs = this._expirationMs;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationMs = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationMs = value.expirationMs;
      this._type = value.type;
    }
  }

  // expiration_ms - computed: false, optional: true, required: false
  private _expirationMs?: string; 
  public get expirationMs() {
    return this.getStringAttribute('expiration_ms');
  }
  public set expirationMs(value: string) {
    this._expirationMs = value;
  }
  public resetExpirationMs() {
    this._expirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationMsInput() {
    return this._expirationMs;
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
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
  /**
  * The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
  * resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
  * concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
  * value 2. The maximum depth allowed is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#recursive_structure_depth HealthcareFhirStore#recursive_structure_depth}
  */
  readonly recursiveStructureDepth: number;
  /**
  * Specifies the output schema type.
  *  * ANALYTICS: Analytics schema defined by the FHIR community.
  *   See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
  *  * ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
  *  * LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#schema_type HealthcareFhirStore#schema_type}
  */
  readonly schemaType?: string;
  /**
  * last_updated_partition_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#last_updated_partition_config HealthcareFhirStore#last_updated_partition_config}
  */
  readonly lastUpdatedPartitionConfig?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
}

export function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recursive_structure_depth: cdktn.numberToTerraform(struct!.recursiveStructureDepth),
    schema_type: cdktn.stringToTerraform(struct!.schemaType),
    last_updated_partition_config: healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigToTerraform(struct!.lastUpdatedPartitionConfig),
  }
}


export function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToHclTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recursive_structure_depth: {
      value: cdktn.numberToHclTerraform(struct!.recursiveStructureDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_type: {
      value: cdktn.stringToHclTerraform(struct!.schemaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_updated_partition_config: {
      value: healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigToHclTerraform(struct!.lastUpdatedPartitionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recursiveStructureDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveStructureDepth = this._recursiveStructureDepth;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    if (this._lastUpdatedPartitionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedPartitionConfig = this._lastUpdatedPartitionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recursiveStructureDepth = undefined;
      this._schemaType = undefined;
      this._lastUpdatedPartitionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recursiveStructureDepth = value.recursiveStructureDepth;
      this._schemaType = value.schemaType;
      this._lastUpdatedPartitionConfig.internalValue = value.lastUpdatedPartitionConfig;
    }
  }

  // recursive_structure_depth - computed: false, optional: false, required: true
  private _recursiveStructureDepth?: number; 
  public get recursiveStructureDepth() {
    return this.getNumberAttribute('recursive_structure_depth');
  }
  public set recursiveStructureDepth(value: number) {
    this._recursiveStructureDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveStructureDepthInput() {
    return this._recursiveStructureDepth;
  }

  // schema_type - computed: false, optional: true, required: false
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }

  // last_updated_partition_config - computed: false, optional: true, required: false
  private _lastUpdatedPartitionConfig = new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(this, "last_updated_partition_config");
  public get lastUpdatedPartitionConfig() {
    return this._lastUpdatedPartitionConfig;
  }
  public putLastUpdatedPartitionConfig(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig) {
    this._lastUpdatedPartitionConfig.internalValue = value;
  }
  public resetLastUpdatedPartitionConfig() {
    this._lastUpdatedPartitionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedPartitionConfigInput() {
    return this._lastUpdatedPartitionConfig.internalValue;
  }
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestination {
  /**
  * BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#dataset_uri HealthcareFhirStore#dataset_uri}
  */
  readonly datasetUri: string;
  /**
  * schema_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#schema_config HealthcareFhirStore#schema_config}
  */
  readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
}

export function healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_uri: cdktn.stringToTerraform(struct!.datasetUri),
    schema_config: healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct!.schemaConfig),
  }
}


export function healthcareFhirStoreStreamConfigsBigqueryDestinationToHclTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_uri: {
      value: cdktn.stringToHclTerraform(struct!.datasetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_config: {
      value: healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToHclTerraform(struct!.schemaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreStreamConfigsBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUri = this._datasetUri;
    }
    if (this._schemaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfig = this._schemaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigsBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetUri = undefined;
      this._schemaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetUri = value.datasetUri;
      this._schemaConfig.internalValue = value.schemaConfig;
    }
  }

  // dataset_uri - computed: false, optional: false, required: true
  private _datasetUri?: string; 
  public get datasetUri() {
    return this.getStringAttribute('dataset_uri');
  }
  public set datasetUri(value: string) {
    this._datasetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUriInput() {
    return this._datasetUri;
  }

  // schema_config - computed: false, optional: false, required: true
  private _schemaConfig = new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(this, "schema_config");
  public get schemaConfig() {
    return this._schemaConfig;
  }
  public putSchemaConfig(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig) {
    this._schemaConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigInput() {
    return this._schemaConfig.internalValue;
  }
}
export interface HealthcareFhirStoreStreamConfigs {
  /**
  * Supply a FHIR resource type (such as "Patient" or "Observation"). See
  * https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
  * an empty list as an intent to stream all the supported resource types in this FHIR store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#resource_types HealthcareFhirStore#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#bigquery_destination HealthcareFhirStore#bigquery_destination}
  */
  readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestination;
}

export function healthcareFhirStoreStreamConfigsToTerraform(struct?: HealthcareFhirStoreStreamConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    bigquery_destination: healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}


export function healthcareFhirStoreStreamConfigsToHclTerraform(struct?: HealthcareFhirStoreStreamConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bigquery_destination: {
      value: healthcareFhirStoreStreamConfigsBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "HealthcareFhirStoreStreamConfigsBigqueryDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreStreamConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HealthcareFhirStoreStreamConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // bigquery_destination - computed: false, optional: false, required: true
  private _bigqueryDestination = new HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: HealthcareFhirStoreStreamConfigsBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}

export class HealthcareFhirStoreStreamConfigsList extends cdktn.ComplexList {
  public internalValue? : HealthcareFhirStoreStreamConfigs[] | cdktn.IResolvable

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
  public get(index: number): HealthcareFhirStoreStreamConfigsOutputReference {
    return new HealthcareFhirStoreStreamConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthcareFhirStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}
  */
  readonly update?: string;
}

export function healthcareFhirStoreTimeoutsToTerraform(struct?: HealthcareFhirStoreTimeouts | cdktn.IResolvable): any {
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


export function healthcareFhirStoreTimeoutsToHclTerraform(struct?: HealthcareFhirStoreTimeouts | cdktn.IResolvable): any {
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

export class HealthcareFhirStoreTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthcareFhirStoreTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: HealthcareFhirStoreTimeouts | cdktn.IResolvable | undefined) {
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
export interface HealthcareFhirStoreValidationConfig {
  /**
  * Whether to disable FHIRPath validation for incoming resources. The default value is false. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#disable_fhirpath_validation HealthcareFhirStore#disable_fhirpath_validation}
  */
  readonly disableFhirpathValidation?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable profile validation for this FHIR store. The default value is false. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#disable_profile_validation HealthcareFhirStore#disable_profile_validation}
  */
  readonly disableProfileValidation?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable reference type validation for incoming resources. The default value is false. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#disable_reference_type_validation HealthcareFhirStore#disable_reference_type_validation}
  */
  readonly disableReferenceTypeValidation?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable required fields validation for incoming resources. The default value is false. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#disable_required_field_validation HealthcareFhirStore#disable_required_field_validation}
  */
  readonly disableRequiredFieldValidation?: boolean | cdktn.IResolvable;
  /**
  * A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation.
  * When a URL cannot be resolved (for example, in a type assertion), the server does not return an error.
  * For example, to use the US Core profiles for validation, set enabledImplementationGuides to ["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]. If enabledImplementationGuides is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the global property of one of the enabled ImplementationGuides.
  * The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported:
  * - min/max
  * - minValue/maxValue
  * - maxLength
  * - type
  * - fixed[x]
  * - pattern[x] on simple types
  * - slicing, when using "value" as the discriminator type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#enabled_implementation_guides HealthcareFhirStore#enabled_implementation_guides}
  */
  readonly enabledImplementationGuides?: string[];
}

export function healthcareFhirStoreValidationConfigToTerraform(struct?: HealthcareFhirStoreValidationConfigOutputReference | HealthcareFhirStoreValidationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_fhirpath_validation: cdktn.booleanToTerraform(struct!.disableFhirpathValidation),
    disable_profile_validation: cdktn.booleanToTerraform(struct!.disableProfileValidation),
    disable_reference_type_validation: cdktn.booleanToTerraform(struct!.disableReferenceTypeValidation),
    disable_required_field_validation: cdktn.booleanToTerraform(struct!.disableRequiredFieldValidation),
    enabled_implementation_guides: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledImplementationGuides),
  }
}


export function healthcareFhirStoreValidationConfigToHclTerraform(struct?: HealthcareFhirStoreValidationConfigOutputReference | HealthcareFhirStoreValidationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_fhirpath_validation: {
      value: cdktn.booleanToHclTerraform(struct!.disableFhirpathValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_profile_validation: {
      value: cdktn.booleanToHclTerraform(struct!.disableProfileValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_reference_type_validation: {
      value: cdktn.booleanToHclTerraform(struct!.disableReferenceTypeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_required_field_validation: {
      value: cdktn.booleanToHclTerraform(struct!.disableRequiredFieldValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_implementation_guides: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledImplementationGuides),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcareFhirStoreValidationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreValidationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableFhirpathValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFhirpathValidation = this._disableFhirpathValidation;
    }
    if (this._disableProfileValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProfileValidation = this._disableProfileValidation;
    }
    if (this._disableReferenceTypeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReferenceTypeValidation = this._disableReferenceTypeValidation;
    }
    if (this._disableRequiredFieldValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRequiredFieldValidation = this._disableRequiredFieldValidation;
    }
    if (this._enabledImplementationGuides !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledImplementationGuides = this._enabledImplementationGuides;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreValidationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableFhirpathValidation = undefined;
      this._disableProfileValidation = undefined;
      this._disableReferenceTypeValidation = undefined;
      this._disableRequiredFieldValidation = undefined;
      this._enabledImplementationGuides = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableFhirpathValidation = value.disableFhirpathValidation;
      this._disableProfileValidation = value.disableProfileValidation;
      this._disableReferenceTypeValidation = value.disableReferenceTypeValidation;
      this._disableRequiredFieldValidation = value.disableRequiredFieldValidation;
      this._enabledImplementationGuides = value.enabledImplementationGuides;
    }
  }

  // disable_fhirpath_validation - computed: false, optional: true, required: false
  private _disableFhirpathValidation?: boolean | cdktn.IResolvable; 
  public get disableFhirpathValidation() {
    return this.getBooleanAttribute('disable_fhirpath_validation');
  }
  public set disableFhirpathValidation(value: boolean | cdktn.IResolvable) {
    this._disableFhirpathValidation = value;
  }
  public resetDisableFhirpathValidation() {
    this._disableFhirpathValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFhirpathValidationInput() {
    return this._disableFhirpathValidation;
  }

  // disable_profile_validation - computed: false, optional: true, required: false
  private _disableProfileValidation?: boolean | cdktn.IResolvable; 
  public get disableProfileValidation() {
    return this.getBooleanAttribute('disable_profile_validation');
  }
  public set disableProfileValidation(value: boolean | cdktn.IResolvable) {
    this._disableProfileValidation = value;
  }
  public resetDisableProfileValidation() {
    this._disableProfileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProfileValidationInput() {
    return this._disableProfileValidation;
  }

  // disable_reference_type_validation - computed: false, optional: true, required: false
  private _disableReferenceTypeValidation?: boolean | cdktn.IResolvable; 
  public get disableReferenceTypeValidation() {
    return this.getBooleanAttribute('disable_reference_type_validation');
  }
  public set disableReferenceTypeValidation(value: boolean | cdktn.IResolvable) {
    this._disableReferenceTypeValidation = value;
  }
  public resetDisableReferenceTypeValidation() {
    this._disableReferenceTypeValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReferenceTypeValidationInput() {
    return this._disableReferenceTypeValidation;
  }

  // disable_required_field_validation - computed: false, optional: true, required: false
  private _disableRequiredFieldValidation?: boolean | cdktn.IResolvable; 
  public get disableRequiredFieldValidation() {
    return this.getBooleanAttribute('disable_required_field_validation');
  }
  public set disableRequiredFieldValidation(value: boolean | cdktn.IResolvable) {
    this._disableRequiredFieldValidation = value;
  }
  public resetDisableRequiredFieldValidation() {
    this._disableRequiredFieldValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRequiredFieldValidationInput() {
    return this._disableRequiredFieldValidation;
  }

  // enabled_implementation_guides - computed: false, optional: true, required: false
  private _enabledImplementationGuides?: string[]; 
  public get enabledImplementationGuides() {
    return this.getListAttribute('enabled_implementation_guides');
  }
  public set enabledImplementationGuides(value: string[]) {
    this._enabledImplementationGuides = value;
  }
  public resetEnabledImplementationGuides() {
    this._enabledImplementationGuides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledImplementationGuidesInput() {
    return this._enabledImplementationGuides;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store google_healthcare_fhir_store}
*/
export class HealthcareFhirStore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_fhir_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a HealthcareFhirStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthcareFhirStore to import
  * @param importFromId The id of the existing HealthcareFhirStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthcareFhirStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_healthcare_fhir_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/healthcare_fhir_store google_healthcare_fhir_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareFhirStoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareFhirStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.39.0',
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
    this._complexDataTypeReferenceParsing = config.complexDataTypeReferenceParsing;
    this._dataset = config.dataset;
    this._defaultSearchHandlingStrict = config.defaultSearchHandlingStrict;
    this._deletionPolicy = config.deletionPolicy;
    this._disableReferentialIntegrity = config.disableReferentialIntegrity;
    this._disableResourceVersioning = config.disableResourceVersioning;
    this._enableHistoryImport = config.enableHistoryImport;
    this._enableUpdateCreate = config.enableUpdateCreate;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._version = config.version;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._notificationConfigs.internalValue = config.notificationConfigs;
    this._streamConfigs.internalValue = config.streamConfigs;
    this._timeouts.internalValue = config.timeouts;
    this._validationConfig.internalValue = config.validationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // complex_data_type_reference_parsing - computed: true, optional: true, required: false
  private _complexDataTypeReferenceParsing?: string; 
  public get complexDataTypeReferenceParsing() {
    return this.getStringAttribute('complex_data_type_reference_parsing');
  }
  public set complexDataTypeReferenceParsing(value: string) {
    this._complexDataTypeReferenceParsing = value;
  }
  public resetComplexDataTypeReferenceParsing() {
    this._complexDataTypeReferenceParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexDataTypeReferenceParsingInput() {
    return this._complexDataTypeReferenceParsing;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // default_search_handling_strict - computed: false, optional: true, required: false
  private _defaultSearchHandlingStrict?: boolean | cdktn.IResolvable; 
  public get defaultSearchHandlingStrict() {
    return this.getBooleanAttribute('default_search_handling_strict');
  }
  public set defaultSearchHandlingStrict(value: boolean | cdktn.IResolvable) {
    this._defaultSearchHandlingStrict = value;
  }
  public resetDefaultSearchHandlingStrict() {
    this._defaultSearchHandlingStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSearchHandlingStrictInput() {
    return this._defaultSearchHandlingStrict;
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

  // disable_referential_integrity - computed: false, optional: true, required: false
  private _disableReferentialIntegrity?: boolean | cdktn.IResolvable; 
  public get disableReferentialIntegrity() {
    return this.getBooleanAttribute('disable_referential_integrity');
  }
  public set disableReferentialIntegrity(value: boolean | cdktn.IResolvable) {
    this._disableReferentialIntegrity = value;
  }
  public resetDisableReferentialIntegrity() {
    this._disableReferentialIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReferentialIntegrityInput() {
    return this._disableReferentialIntegrity;
  }

  // disable_resource_versioning - computed: false, optional: true, required: false
  private _disableResourceVersioning?: boolean | cdktn.IResolvable; 
  public get disableResourceVersioning() {
    return this.getBooleanAttribute('disable_resource_versioning');
  }
  public set disableResourceVersioning(value: boolean | cdktn.IResolvable) {
    this._disableResourceVersioning = value;
  }
  public resetDisableResourceVersioning() {
    this._disableResourceVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResourceVersioningInput() {
    return this._disableResourceVersioning;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_history_import - computed: false, optional: true, required: false
  private _enableHistoryImport?: boolean | cdktn.IResolvable; 
  public get enableHistoryImport() {
    return this.getBooleanAttribute('enable_history_import');
  }
  public set enableHistoryImport(value: boolean | cdktn.IResolvable) {
    this._enableHistoryImport = value;
  }
  public resetEnableHistoryImport() {
    this._enableHistoryImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHistoryImportInput() {
    return this._enableHistoryImport;
  }

  // enable_update_create - computed: false, optional: true, required: false
  private _enableUpdateCreate?: boolean | cdktn.IResolvable; 
  public get enableUpdateCreate() {
    return this.getBooleanAttribute('enable_update_create');
  }
  public set enableUpdateCreate(value: boolean | cdktn.IResolvable) {
    this._enableUpdateCreate = value;
  }
  public resetEnableUpdateCreate() {
    this._enableUpdateCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpdateCreateInput() {
    return this._enableUpdateCreate;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new HealthcareFhirStoreNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: HealthcareFhirStoreNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // notification_configs - computed: false, optional: true, required: false
  private _notificationConfigs = new HealthcareFhirStoreNotificationConfigsList(this, "notification_configs", false);
  public get notificationConfigs() {
    return this._notificationConfigs;
  }
  public putNotificationConfigs(value: HealthcareFhirStoreNotificationConfigs[] | cdktn.IResolvable) {
    this._notificationConfigs.internalValue = value;
  }
  public resetNotificationConfigs() {
    this._notificationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigsInput() {
    return this._notificationConfigs.internalValue;
  }

  // stream_configs - computed: false, optional: true, required: false
  private _streamConfigs = new HealthcareFhirStoreStreamConfigsList(this, "stream_configs", false);
  public get streamConfigs() {
    return this._streamConfigs;
  }
  public putStreamConfigs(value: HealthcareFhirStoreStreamConfigs[] | cdktn.IResolvable) {
    this._streamConfigs.internalValue = value;
  }
  public resetStreamConfigs() {
    this._streamConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigsInput() {
    return this._streamConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcareFhirStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcareFhirStoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // validation_config - computed: false, optional: true, required: false
  private _validationConfig = new HealthcareFhirStoreValidationConfigOutputReference(this, "validation_config");
  public get validationConfig() {
    return this._validationConfig;
  }
  public putValidationConfig(value: HealthcareFhirStoreValidationConfig) {
    this._validationConfig.internalValue = value;
  }
  public resetValidationConfig() {
    this._validationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationConfigInput() {
    return this._validationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      complex_data_type_reference_parsing: cdktn.stringToTerraform(this._complexDataTypeReferenceParsing),
      dataset: cdktn.stringToTerraform(this._dataset),
      default_search_handling_strict: cdktn.booleanToTerraform(this._defaultSearchHandlingStrict),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      disable_referential_integrity: cdktn.booleanToTerraform(this._disableReferentialIntegrity),
      disable_resource_versioning: cdktn.booleanToTerraform(this._disableResourceVersioning),
      enable_history_import: cdktn.booleanToTerraform(this._enableHistoryImport),
      enable_update_create: cdktn.booleanToTerraform(this._enableUpdateCreate),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      version: cdktn.stringToTerraform(this._version),
      notification_config: healthcareFhirStoreNotificationConfigToTerraform(this._notificationConfig.internalValue),
      notification_configs: cdktn.listMapper(healthcareFhirStoreNotificationConfigsToTerraform, true)(this._notificationConfigs.internalValue),
      stream_configs: cdktn.listMapper(healthcareFhirStoreStreamConfigsToTerraform, true)(this._streamConfigs.internalValue),
      timeouts: healthcareFhirStoreTimeoutsToTerraform(this._timeouts.internalValue),
      validation_config: healthcareFhirStoreValidationConfigToTerraform(this._validationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      complex_data_type_reference_parsing: {
        value: cdktn.stringToHclTerraform(this._complexDataTypeReferenceParsing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: cdktn.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_search_handling_strict: {
        value: cdktn.booleanToHclTerraform(this._defaultSearchHandlingStrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_referential_integrity: {
        value: cdktn.booleanToHclTerraform(this._disableReferentialIntegrity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_resource_versioning: {
        value: cdktn.booleanToHclTerraform(this._disableResourceVersioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_history_import: {
        value: cdktn.booleanToHclTerraform(this._enableHistoryImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_update_create: {
        value: cdktn.booleanToHclTerraform(this._enableUpdateCreate),
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
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_config: {
        value: healthcareFhirStoreNotificationConfigToHclTerraform(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcareFhirStoreNotificationConfigList",
      },
      notification_configs: {
        value: cdktn.listMapperHcl(healthcareFhirStoreNotificationConfigsToHclTerraform, true)(this._notificationConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcareFhirStoreNotificationConfigsList",
      },
      stream_configs: {
        value: cdktn.listMapperHcl(healthcareFhirStoreStreamConfigsToHclTerraform, true)(this._streamConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcareFhirStoreStreamConfigsList",
      },
      timeouts: {
        value: healthcareFhirStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthcareFhirStoreTimeouts",
      },
      validation_config: {
        value: healthcareFhirStoreValidationConfigToHclTerraform(this._validationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcareFhirStoreValidationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
