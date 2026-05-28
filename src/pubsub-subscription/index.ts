/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PubsubSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * This value is the maximum time after a subscriber receives a message
  * before the subscriber should acknowledge the message. After message
  * delivery but before the ack deadline expires and before the message is
  * acknowledged, it is an outstanding message and will not be delivered
  * again during that time (on a best-effort basis).
  * 
  * For pull subscriptions, this value is used as the initial value for
  * the ack deadline. To override this value for a given message, call
  * subscriptions.modifyAckDeadline with the corresponding ackId if using
  * pull. The minimum custom deadline you can specify is 10 seconds. The
  * maximum custom deadline you can specify is 600 seconds (10 minutes).
  * If this parameter is 0, a default value of 10 seconds is used.
  * 
  * For push delivery, this value is also used to set the request timeout
  * for the call to the push endpoint.
  * 
  * If the subscriber never acknowledges the message, the Pub/Sub system
  * will eventually redeliver the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}
  */
  readonly ackDeadlineSeconds?: number;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#deletion_policy PubsubSubscription#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * If 'true', Pub/Sub provides the following guarantees for the delivery
  * of a message with a given value of messageId on this Subscriptions':
  * 
  * - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.
  * 
  * - An acknowledged message will not be resent to a subscriber.
  * 
  * Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
  * is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}
  */
  readonly enableExactlyOnceDelivery?: boolean | cdktn.IResolvable;
  /**
  * If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to
  * the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
  * may be delivered in any order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}
  */
  readonly enableMessageOrdering?: boolean | cdktn.IResolvable;
  /**
  * The subscription only delivers the messages that match the filter.
  * Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
  * by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
  * you can't modify the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#filter PubsubSubscription#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this Subscription.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#labels PubsubSubscription#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * How long to retain unacknowledged messages in the subscription's
  * backlog, from the moment a message is published. If
  * retain_acked_messages is true, then this also configures the retention
  * of acknowledged messages, and thus configures how far back in time a
  * subscriptions.seek can be done. Defaults to 7 days. Cannot be more
  * than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').
  * 
  * A duration in seconds with up to nine fractional digits, terminated
  * by 's'. Example: '"600.5s"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#name PubsubSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}
  */
  readonly project?: string;
  /**
  * Indicates whether to retain acknowledged messages. If 'true', then
  * messages are not expunged from the subscription's backlog, even if
  * they are acknowledged, until they fall out of the
  * messageRetentionDuration window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}
  */
  readonly retainAckedMessages?: boolean | cdktn.IResolvable;
  /**
  * Input only. Resource manager tags to be bound to the subscription. Tag
  * keys and values have the same definition as resource manager tags. Keys
  * must be in the format tagKeys/{tag_key_id}, and values are in the format
  * tagValues/456. The field is ignored when empty. The field is immutable and
  * causes resource replacement when mutated. This field is only set at create
  * time and modifying this field after creation will trigger recreation. To
  * apply tags to an existing resource, see the 'google_tags_tag_value'
  * resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#tags PubsubSubscription#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * A reference to a Topic resource, of the form projects/{project}/topics/{{name}}
  * (as in the id property of a google_pubsub_topic), or just a topic name if
  * the topic is in the same project as the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#topic PubsubSubscription#topic}
  */
  readonly topic: string;
  /**
  * bigquery_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}
  */
  readonly bigqueryConfig?: PubsubSubscriptionBigqueryConfig;
  /**
  * cloud_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#cloud_storage_config PubsubSubscription#cloud_storage_config}
  */
  readonly cloudStorageConfig?: PubsubSubscriptionCloudStorageConfig;
  /**
  * dead_letter_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}
  */
  readonly deadLetterPolicy?: PubsubSubscriptionDeadLetterPolicy;
  /**
  * expiration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}
  */
  readonly expirationPolicy?: PubsubSubscriptionExpirationPolicy;
  /**
  * message_transforms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#message_transforms PubsubSubscription#message_transforms}
  */
  readonly messageTransforms?: PubsubSubscriptionMessageTransforms[] | cdktn.IResolvable;
  /**
  * push_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#push_config PubsubSubscription#push_config}
  */
  readonly pushConfig?: PubsubSubscriptionPushConfig;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}
  */
  readonly retryPolicy?: PubsubSubscriptionRetryPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#timeouts PubsubSubscription#timeouts}
  */
  readonly timeouts?: PubsubSubscriptionTimeouts;
}
export interface PubsubSubscriptionBigqueryConfig {
  /**
  * When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that
  * are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync
  * and any messages with extra fields are not written and remain in the subscription's backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#drop_unknown_fields PubsubSubscription#drop_unknown_fields}
  */
  readonly dropUnknownFields?: boolean | cdktn.IResolvable;
  /**
  * The service account to use to write to BigQuery. If not specified, the Pub/Sub
  * [service agent](https://cloud.google.com/iam/docs/service-agents),
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#table PubsubSubscription#table}
  */
  readonly table: string;
  /**
  * When true, use the BigQuery table's schema as the columns to write to in BigQuery. Messages
  * must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#use_table_schema PubsubSubscription#use_table_schema}
  */
  readonly useTableSchema?: boolean | cdktn.IResolvable;
  /**
  * When true, use the topic's schema as the columns to write to in BigQuery, if it exists.
  * Only one of use_topic_schema and use_table_schema can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktn.IResolvable;
  /**
  * When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.
  * The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktn.IResolvable;
}

export function pubsubSubscriptionBigqueryConfigToTerraform(struct?: PubsubSubscriptionBigqueryConfigOutputReference | PubsubSubscriptionBigqueryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_unknown_fields: cdktn.booleanToTerraform(struct!.dropUnknownFields),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    table: cdktn.stringToTerraform(struct!.table),
    use_table_schema: cdktn.booleanToTerraform(struct!.useTableSchema),
    use_topic_schema: cdktn.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktn.booleanToTerraform(struct!.writeMetadata),
  }
}


export function pubsubSubscriptionBigqueryConfigToHclTerraform(struct?: PubsubSubscriptionBigqueryConfigOutputReference | PubsubSubscriptionBigqueryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_unknown_fields: {
      value: cdktn.booleanToHclTerraform(struct!.dropUnknownFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_table_schema: {
      value: cdktn.booleanToHclTerraform(struct!.useTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_topic_schema: {
      value: cdktn.booleanToHclTerraform(struct!.useTopicSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata: {
      value: cdktn.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionBigqueryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionBigqueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnknownFields = this._dropUnknownFields;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._useTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTableSchema = this._useTableSchema;
    }
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionBigqueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropUnknownFields = undefined;
      this._serviceAccountEmail = undefined;
      this._table = undefined;
      this._useTableSchema = undefined;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropUnknownFields = value.dropUnknownFields;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._table = value.table;
      this._useTableSchema = value.useTableSchema;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // drop_unknown_fields - computed: false, optional: true, required: false
  private _dropUnknownFields?: boolean | cdktn.IResolvable; 
  public get dropUnknownFields() {
    return this.getBooleanAttribute('drop_unknown_fields');
  }
  public set dropUnknownFields(value: boolean | cdktn.IResolvable) {
    this._dropUnknownFields = value;
  }
  public resetDropUnknownFields() {
    this._dropUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnknownFieldsInput() {
    return this._dropUnknownFields;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // use_table_schema - computed: false, optional: true, required: false
  private _useTableSchema?: boolean | cdktn.IResolvable; 
  public get useTableSchema() {
    return this.getBooleanAttribute('use_table_schema');
  }
  public set useTableSchema(value: boolean | cdktn.IResolvable) {
    this._useTableSchema = value;
  }
  public resetUseTableSchema() {
    this._useTableSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTableSchemaInput() {
    return this._useTableSchema;
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktn.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktn.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktn.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktn.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface PubsubSubscriptionCloudStorageConfigAvroConfig {
  /**
  * When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktn.IResolvable;
  /**
  * When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktn.IResolvable;
}

export function pubsubSubscriptionCloudStorageConfigAvroConfigToTerraform(struct?: PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference | PubsubSubscriptionCloudStorageConfigAvroConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_topic_schema: cdktn.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktn.booleanToTerraform(struct!.writeMetadata),
  }
}


export function pubsubSubscriptionCloudStorageConfigAvroConfigToHclTerraform(struct?: PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference | PubsubSubscriptionCloudStorageConfigAvroConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_topic_schema: {
      value: cdktn.booleanToHclTerraform(struct!.useTopicSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata: {
      value: cdktn.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionCloudStorageConfigAvroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionCloudStorageConfigAvroConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktn.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktn.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktn.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktn.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface PubsubSubscriptionCloudStorageConfigTextConfig {
}

export function pubsubSubscriptionCloudStorageConfigTextConfigToTerraform(struct?: PubsubSubscriptionCloudStorageConfigTextConfigOutputReference | PubsubSubscriptionCloudStorageConfigTextConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pubsubSubscriptionCloudStorageConfigTextConfigToHclTerraform(struct?: PubsubSubscriptionCloudStorageConfigTextConfigOutputReference | PubsubSubscriptionCloudStorageConfigTextConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PubsubSubscriptionCloudStorageConfigTextConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionCloudStorageConfigTextConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionCloudStorageConfigTextConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface PubsubSubscriptionCloudStorageConfig {
  /**
  * User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#bucket PubsubSubscription#bucket}
  */
  readonly bucket: string;
  /**
  * User-provided format string specifying how to represent datetimes in Cloud Storage filenames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#filename_datetime_format PubsubSubscription#filename_datetime_format}
  */
  readonly filenameDatetimeFormat?: string;
  /**
  * User-provided prefix for Cloud Storage filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#filename_prefix PubsubSubscription#filename_prefix}
  */
  readonly filenamePrefix?: string;
  /**
  * User-provided suffix for Cloud Storage filename. Must not end in "/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#filename_suffix PubsubSubscription#filename_suffix}
  */
  readonly filenameSuffix?: string;
  /**
  * The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB.
  * The maxBytes limit may be exceeded in cases where messages are larger than the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#max_bytes PubsubSubscription#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes.
  * May not exceed the subscription's acknowledgement deadline.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#max_duration PubsubSubscription#max_duration}
  */
  readonly maxDuration?: string;
  /**
  * The maximum messages that can be written to a Cloud Storage file before a new file is created. Min 1000 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#max_messages PubsubSubscription#max_messages}
  */
  readonly maxMessages?: number;
  /**
  * The service account to use to write to Cloud Storage. If not specified, the Pub/Sub
  * [service agent](https://cloud.google.com/iam/docs/service-agents),
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * avro_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#avro_config PubsubSubscription#avro_config}
  */
  readonly avroConfig?: PubsubSubscriptionCloudStorageConfigAvroConfig;
  /**
  * text_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#text_config PubsubSubscription#text_config}
  */
  readonly textConfig?: PubsubSubscriptionCloudStorageConfigTextConfig;
}

export function pubsubSubscriptionCloudStorageConfigToTerraform(struct?: PubsubSubscriptionCloudStorageConfigOutputReference | PubsubSubscriptionCloudStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    filename_datetime_format: cdktn.stringToTerraform(struct!.filenameDatetimeFormat),
    filename_prefix: cdktn.stringToTerraform(struct!.filenamePrefix),
    filename_suffix: cdktn.stringToTerraform(struct!.filenameSuffix),
    max_bytes: cdktn.numberToTerraform(struct!.maxBytes),
    max_duration: cdktn.stringToTerraform(struct!.maxDuration),
    max_messages: cdktn.numberToTerraform(struct!.maxMessages),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    avro_config: pubsubSubscriptionCloudStorageConfigAvroConfigToTerraform(struct!.avroConfig),
    text_config: pubsubSubscriptionCloudStorageConfigTextConfigToTerraform(struct!.textConfig),
  }
}


export function pubsubSubscriptionCloudStorageConfigToHclTerraform(struct?: PubsubSubscriptionCloudStorageConfigOutputReference | PubsubSubscriptionCloudStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_datetime_format: {
      value: cdktn.stringToHclTerraform(struct!.filenameDatetimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_prefix: {
      value: cdktn.stringToHclTerraform(struct!.filenamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_suffix: {
      value: cdktn.stringToHclTerraform(struct!.filenameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktn.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktn.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_messages: {
      value: cdktn.numberToHclTerraform(struct!.maxMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_config: {
      value: pubsubSubscriptionCloudStorageConfigAvroConfigToHclTerraform(struct!.avroConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionCloudStorageConfigAvroConfigList",
    },
    text_config: {
      value: pubsubSubscriptionCloudStorageConfigTextConfigToHclTerraform(struct!.textConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionCloudStorageConfigTextConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionCloudStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionCloudStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._filenameDatetimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameDatetimeFormat = this._filenameDatetimeFormat;
    }
    if (this._filenamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePrefix = this._filenamePrefix;
    }
    if (this._filenameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameSuffix = this._filenameSuffix;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._maxMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessages = this._maxMessages;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._avroConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroConfig = this._avroConfig?.internalValue;
    }
    if (this._textConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textConfig = this._textConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionCloudStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._filenameDatetimeFormat = undefined;
      this._filenamePrefix = undefined;
      this._filenameSuffix = undefined;
      this._maxBytes = undefined;
      this._maxDuration = undefined;
      this._maxMessages = undefined;
      this._serviceAccountEmail = undefined;
      this._avroConfig.internalValue = undefined;
      this._textConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._filenameDatetimeFormat = value.filenameDatetimeFormat;
      this._filenamePrefix = value.filenamePrefix;
      this._filenameSuffix = value.filenameSuffix;
      this._maxBytes = value.maxBytes;
      this._maxDuration = value.maxDuration;
      this._maxMessages = value.maxMessages;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._avroConfig.internalValue = value.avroConfig;
      this._textConfig.internalValue = value.textConfig;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // filename_datetime_format - computed: false, optional: true, required: false
  private _filenameDatetimeFormat?: string; 
  public get filenameDatetimeFormat() {
    return this.getStringAttribute('filename_datetime_format');
  }
  public set filenameDatetimeFormat(value: string) {
    this._filenameDatetimeFormat = value;
  }
  public resetFilenameDatetimeFormat() {
    this._filenameDatetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameDatetimeFormatInput() {
    return this._filenameDatetimeFormat;
  }

  // filename_prefix - computed: false, optional: true, required: false
  private _filenamePrefix?: string; 
  public get filenamePrefix() {
    return this.getStringAttribute('filename_prefix');
  }
  public set filenamePrefix(value: string) {
    this._filenamePrefix = value;
  }
  public resetFilenamePrefix() {
    this._filenamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePrefixInput() {
    return this._filenamePrefix;
  }

  // filename_suffix - computed: false, optional: true, required: false
  private _filenameSuffix?: string; 
  public get filenameSuffix() {
    return this.getStringAttribute('filename_suffix');
  }
  public set filenameSuffix(value: string) {
    this._filenameSuffix = value;
  }
  public resetFilenameSuffix() {
    this._filenameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameSuffixInput() {
    return this._filenameSuffix;
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // max_messages - computed: false, optional: true, required: false
  private _maxMessages?: number; 
  public get maxMessages() {
    return this.getNumberAttribute('max_messages');
  }
  public set maxMessages(value: number) {
    this._maxMessages = value;
  }
  public resetMaxMessages() {
    this._maxMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessagesInput() {
    return this._maxMessages;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // avro_config - computed: false, optional: true, required: false
  private _avroConfig = new PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(this, "avro_config");
  public get avroConfig() {
    return this._avroConfig;
  }
  public putAvroConfig(value: PubsubSubscriptionCloudStorageConfigAvroConfig) {
    this._avroConfig.internalValue = value;
  }
  public resetAvroConfig() {
    this._avroConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroConfigInput() {
    return this._avroConfig.internalValue;
  }

  // text_config - computed: false, optional: true, required: false
  private _textConfig = new PubsubSubscriptionCloudStorageConfigTextConfigOutputReference(this, "text_config");
  public get textConfig() {
    return this._textConfig;
  }
  public putTextConfig(value: PubsubSubscriptionCloudStorageConfigTextConfig) {
    this._textConfig.internalValue = value;
  }
  public resetTextConfig() {
    this._textConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textConfigInput() {
    return this._textConfig.internalValue;
  }
}
export interface PubsubSubscriptionDeadLetterPolicy {
  /**
  * The name of the topic to which dead letter messages should be published.
  * Format is 'projects/{project}/topics/{topic}'.
  * 
  * The Cloud Pub/Sub service account associated with the enclosing subscription's
  * parent project (i.e.,
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
  * permission to Publish() to this topic.
  * 
  * The operation will fail if the topic does not exist.
  * Users should ensure that there is a subscription attached to this topic
  * since messages published to a topic with no subscriptions are lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#dead_letter_topic PubsubSubscription#dead_letter_topic}
  */
  readonly deadLetterTopic?: string;
  /**
  * The maximum number of delivery attempts for any message. The value must be
  * between 5 and 100.
  * 
  * The number of delivery attempts is defined as 1 + (the sum of number of
  * NACKs and number of times the acknowledgement deadline has been exceeded for the message).
  * 
  * A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
  * client libraries may automatically extend ack_deadlines.
  * 
  * This field will be honored on a best effort basis.
  * 
  * If this parameter is 0, a default value of 5 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#max_delivery_attempts PubsubSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts?: number;
}

export function pubsubSubscriptionDeadLetterPolicyToTerraform(struct?: PubsubSubscriptionDeadLetterPolicyOutputReference | PubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_letter_topic: cdktn.stringToTerraform(struct!.deadLetterTopic),
    max_delivery_attempts: cdktn.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}


export function pubsubSubscriptionDeadLetterPolicyToHclTerraform(struct?: PubsubSubscriptionDeadLetterPolicyOutputReference | PubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_letter_topic: {
      value: cdktn.stringToHclTerraform(struct!.deadLetterTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_delivery_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliveryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionDeadLetterPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionDeadLetterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterTopic = this._deadLetterTopic;
    }
    if (this._maxDeliveryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryAttempts = this._maxDeliveryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionDeadLetterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTopic = undefined;
      this._maxDeliveryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTopic = value.deadLetterTopic;
      this._maxDeliveryAttempts = value.maxDeliveryAttempts;
    }
  }

  // dead_letter_topic - computed: false, optional: true, required: false
  private _deadLetterTopic?: string; 
  public get deadLetterTopic() {
    return this.getStringAttribute('dead_letter_topic');
  }
  public set deadLetterTopic(value: string) {
    this._deadLetterTopic = value;
  }
  public resetDeadLetterTopic() {
    this._deadLetterTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterTopicInput() {
    return this._deadLetterTopic;
  }

  // max_delivery_attempts - computed: false, optional: true, required: false
  private _maxDeliveryAttempts?: number; 
  public get maxDeliveryAttempts() {
    return this.getNumberAttribute('max_delivery_attempts');
  }
  public set maxDeliveryAttempts(value: number) {
    this._maxDeliveryAttempts = value;
  }
  public resetMaxDeliveryAttempts() {
    this._maxDeliveryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryAttemptsInput() {
    return this._maxDeliveryAttempts;
  }
}
export interface PubsubSubscriptionExpirationPolicy {
  /**
  * Specifies the "time-to-live" duration for an associated resource. The
  * resource expires if it is not active for a period of ttl.
  * If ttl is set to "", the associated resource never expires.
  * A duration in seconds with up to nine fractional digits, terminated by 's'.
  * Example - "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#ttl PubsubSubscription#ttl}
  */
  readonly ttl: string;
}

export function pubsubSubscriptionExpirationPolicyToTerraform(struct?: PubsubSubscriptionExpirationPolicyOutputReference | PubsubSubscriptionExpirationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktn.stringToTerraform(struct!.ttl),
  }
}


export function pubsubSubscriptionExpirationPolicyToHclTerraform(struct?: PubsubSubscriptionExpirationPolicyOutputReference | PubsubSubscriptionExpirationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: cdktn.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionExpirationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference {
  /**
  * A parameters object to be included in each inference request.
  * The parameters object is combined with the data field of the Pub/Sub
  * message to form the inference request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#parameters PubsubSubscription#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function pubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceToTerraform(struct?: PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference | PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
  }
}


export function pubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceToHclTerraform(struct?: PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference | PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface PubsubSubscriptionMessageTransformsAiInference {
  /**
  * The endpoint to a Vertex AI model of the form
  * 'projects/{project}/locations/{location}/endpoints/{endpoint}' or
  * 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'.
  * Vertex AI API requests will be sent to this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#endpoint PubsubSubscription#endpoint}
  */
  readonly endpoint: string;
  /**
  * The service account to use to make prediction requests against
  * endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * unstructured_inference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#unstructured_inference PubsubSubscription#unstructured_inference}
  */
  readonly unstructuredInference?: PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference;
}

export function pubsubSubscriptionMessageTransformsAiInferenceToTerraform(struct?: PubsubSubscriptionMessageTransformsAiInferenceOutputReference | PubsubSubscriptionMessageTransformsAiInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    unstructured_inference: pubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceToTerraform(struct!.unstructuredInference),
  }
}


export function pubsubSubscriptionMessageTransformsAiInferenceToHclTerraform(struct?: PubsubSubscriptionMessageTransformsAiInferenceOutputReference | PubsubSubscriptionMessageTransformsAiInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unstructured_inference: {
      value: pubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceToHclTerraform(struct!.unstructuredInference),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionMessageTransformsAiInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionMessageTransformsAiInference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._unstructuredInference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructuredInference = this._unstructuredInference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionMessageTransformsAiInference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._serviceAccountEmail = undefined;
      this._unstructuredInference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._unstructuredInference.internalValue = value.unstructuredInference;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // unstructured_inference - computed: false, optional: true, required: false
  private _unstructuredInference = new PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference(this, "unstructured_inference");
  public get unstructuredInference() {
    return this._unstructuredInference;
  }
  public putUnstructuredInference(value: PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference) {
    this._unstructuredInference.internalValue = value;
  }
  public resetUnstructuredInference() {
    this._unstructuredInference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInferenceInput() {
    return this._unstructuredInference.internalValue;
  }
}
export interface PubsubSubscriptionMessageTransformsJavascriptUdf {
  /**
  * JavaScript code that contains a function 'function_name' with the
  * following signature:
  * ```
  *   /**
  *   * Transforms a Pub/Sub message.
  *   *
  *   * @return {(Object<string, (string | Object<string, string>)>|null)} - To
  *   * filter a message, return 'null'. To transform a message return a map
  *   * with the following keys:
  *   *   - (required) 'data' : {string}
  *   *   - (optional) 'attributes' : {Object<string, string>}
  *   * Returning empty 'attributes' will remove all attributes from the
  *   * message.
  *   *
  *   * @param  {(Object<string, (string | Object<string, string>)>} Pub/Sub
  *   * message. Keys:
  *   *   - (required) 'data' : {string}
  *   *   - (required) 'attributes' : {Object<string, string>}
  *   *
  *   * @param  {Object<string, any>} metadata - Pub/Sub message metadata.
  *   * Keys:
  *   *   - (required) 'message_id'  : {string}
  *   *   - (optional) 'publish_time': {string} YYYY-MM-DDTHH:MM:SSZ format
  *   *   - (optional) 'ordering_key': {string}
  *   * /
  *   function <function_name>(message, metadata) {
  *   }
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#code PubsubSubscription#code}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly code: string;
  /**
  * Name of the JavaScript function that should be applied to Pub/Sub messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#function_name PubsubSubscription#function_name}
  */
  readonly functionName: string;
}

export function pubsubSubscriptionMessageTransformsJavascriptUdfToTerraform(struct?: PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference | PubsubSubscriptionMessageTransformsJavascriptUdf): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    function_name: cdktn.stringToTerraform(struct!.functionName),
  }
}


export function pubsubSubscriptionMessageTransformsJavascriptUdfToHclTerraform(struct?: PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference | PubsubSubscriptionMessageTransformsJavascriptUdf): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_name: {
      value: cdktn.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionMessageTransformsJavascriptUdf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionMessageTransformsJavascriptUdf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._functionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._functionName = value.functionName;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }
}
export interface PubsubSubscriptionMessageTransforms {
  /**
  * Controls whether or not to use this transform. If not set or 'false',
  * the transform will be applied to messages. Default: 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#disabled PubsubSubscription#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * ai_inference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#ai_inference PubsubSubscription#ai_inference}
  */
  readonly aiInference?: PubsubSubscriptionMessageTransformsAiInference;
  /**
  * javascript_udf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#javascript_udf PubsubSubscription#javascript_udf}
  */
  readonly javascriptUdf?: PubsubSubscriptionMessageTransformsJavascriptUdf;
}

export function pubsubSubscriptionMessageTransformsToTerraform(struct?: PubsubSubscriptionMessageTransforms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    ai_inference: pubsubSubscriptionMessageTransformsAiInferenceToTerraform(struct!.aiInference),
    javascript_udf: pubsubSubscriptionMessageTransformsJavascriptUdfToTerraform(struct!.javascriptUdf),
  }
}


export function pubsubSubscriptionMessageTransformsToHclTerraform(struct?: PubsubSubscriptionMessageTransforms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ai_inference: {
      value: pubsubSubscriptionMessageTransformsAiInferenceToHclTerraform(struct!.aiInference),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionMessageTransformsAiInferenceList",
    },
    javascript_udf: {
      value: pubsubSubscriptionMessageTransformsJavascriptUdfToHclTerraform(struct!.javascriptUdf),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionMessageTransformsJavascriptUdfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionMessageTransformsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PubsubSubscriptionMessageTransforms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._aiInference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiInference = this._aiInference?.internalValue;
    }
    if (this._javascriptUdf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptUdf = this._javascriptUdf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionMessageTransforms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._aiInference.internalValue = undefined;
      this._javascriptUdf.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._aiInference.internalValue = value.aiInference;
      this._javascriptUdf.internalValue = value.javascriptUdf;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // ai_inference - computed: false, optional: true, required: false
  private _aiInference = new PubsubSubscriptionMessageTransformsAiInferenceOutputReference(this, "ai_inference");
  public get aiInference() {
    return this._aiInference;
  }
  public putAiInference(value: PubsubSubscriptionMessageTransformsAiInference) {
    this._aiInference.internalValue = value;
  }
  public resetAiInference() {
    this._aiInference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiInferenceInput() {
    return this._aiInference.internalValue;
  }

  // javascript_udf - computed: false, optional: true, required: false
  private _javascriptUdf = new PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference(this, "javascript_udf");
  public get javascriptUdf() {
    return this._javascriptUdf;
  }
  public putJavascriptUdf(value: PubsubSubscriptionMessageTransformsJavascriptUdf) {
    this._javascriptUdf.internalValue = value;
  }
  public resetJavascriptUdf() {
    this._javascriptUdf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptUdfInput() {
    return this._javascriptUdf.internalValue;
  }
}

export class PubsubSubscriptionMessageTransformsList extends cdktn.ComplexList {
  public internalValue? : PubsubSubscriptionMessageTransforms[] | cdktn.IResolvable

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
  public get(index: number): PubsubSubscriptionMessageTransformsOutputReference {
    return new PubsubSubscriptionMessageTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PubsubSubscriptionPushConfigNoWrapper {
  /**
  * When true, writes the Pub/Sub message metadata to
  * 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. Writes the
  * Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}
  */
  readonly writeMetadata: boolean | cdktn.IResolvable;
}

export function pubsubSubscriptionPushConfigNoWrapperToTerraform(struct?: PubsubSubscriptionPushConfigNoWrapperOutputReference | PubsubSubscriptionPushConfigNoWrapper): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    write_metadata: cdktn.booleanToTerraform(struct!.writeMetadata),
  }
}


export function pubsubSubscriptionPushConfigNoWrapperToHclTerraform(struct?: PubsubSubscriptionPushConfigNoWrapperOutputReference | PubsubSubscriptionPushConfigNoWrapper): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    write_metadata: {
      value: cdktn.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionPushConfigNoWrapperOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionPushConfigNoWrapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionPushConfigNoWrapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // write_metadata - computed: false, optional: false, required: true
  private _writeMetadata?: boolean | cdktn.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktn.IResolvable) {
    this._writeMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface PubsubSubscriptionPushConfigOidcToken {
  /**
  * Audience to be used when generating OIDC token. The audience claim
  * identifies the recipients that the JWT is intended for. The audience
  * value is a single case-sensitive string. Having multiple values (array)
  * for the audience field is not supported. More info about the OIDC JWT
  * token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
  * Note: if not specified, the Push endpoint URL will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#audience PubsubSubscription#audience}
  */
  readonly audience?: string;
  /**
  * Service account email to be used for generating the OIDC token.
  * The caller (for subscriptions.create, subscriptions.patch, and
  * subscriptions.modifyPushConfig RPCs) must have the
  * iam.serviceAccounts.actAs permission for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function pubsubSubscriptionPushConfigOidcTokenToTerraform(struct?: PubsubSubscriptionPushConfigOidcTokenOutputReference | PubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function pubsubSubscriptionPushConfigOidcTokenToHclTerraform(struct?: PubsubSubscriptionPushConfigOidcTokenOutputReference | PubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionPushConfigOidcTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionPushConfigOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionPushConfigOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface PubsubSubscriptionPushConfig {
  /**
  * Endpoint configuration attributes.
  * 
  * Every endpoint has a set of API supported attributes that can
  * be used to control different aspects of the message delivery.
  * 
  * The currently supported attribute is x-goog-version, which you
  * can use to change the format of the pushed message. This
  * attribute indicates the version of the data expected by
  * the endpoint. This controls the shape of the pushed message
  * (i.e., its fields and metadata). The endpoint version is
  * based on the version of the Pub/Sub API.
  * 
  * If not present during the subscriptions.create call,
  * it will default to the version of the API used to make
  * such call. If not present during a subscriptions.modifyPushConfig
  * call, its value will not be changed. subscriptions.get
  * calls will always return a valid version, even if the
  * subscription was created without this attribute.
  * 
  * The possible values for this attribute are:
  * 
  * - v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
  * - v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#attributes PubsubSubscription#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A URL locating the endpoint to which messages should be pushed.
  * For example, a Webhook endpoint might use
  * "https://example.com/push".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#push_endpoint PubsubSubscription#push_endpoint}
  */
  readonly pushEndpoint: string;
  /**
  * no_wrapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#no_wrapper PubsubSubscription#no_wrapper}
  */
  readonly noWrapper?: PubsubSubscriptionPushConfigNoWrapper;
  /**
  * oidc_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#oidc_token PubsubSubscription#oidc_token}
  */
  readonly oidcToken?: PubsubSubscriptionPushConfigOidcToken;
}

export function pubsubSubscriptionPushConfigToTerraform(struct?: PubsubSubscriptionPushConfigOutputReference | PubsubSubscriptionPushConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    push_endpoint: cdktn.stringToTerraform(struct!.pushEndpoint),
    no_wrapper: pubsubSubscriptionPushConfigNoWrapperToTerraform(struct!.noWrapper),
    oidc_token: pubsubSubscriptionPushConfigOidcTokenToTerraform(struct!.oidcToken),
  }
}


export function pubsubSubscriptionPushConfigToHclTerraform(struct?: PubsubSubscriptionPushConfigOutputReference | PubsubSubscriptionPushConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    push_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.pushEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_wrapper: {
      value: pubsubSubscriptionPushConfigNoWrapperToHclTerraform(struct!.noWrapper),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionPushConfigNoWrapperList",
    },
    oidc_token: {
      value: pubsubSubscriptionPushConfigOidcTokenToHclTerraform(struct!.oidcToken),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubSubscriptionPushConfigOidcTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionPushConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionPushConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._pushEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushEndpoint = this._pushEndpoint;
    }
    if (this._noWrapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWrapper = this._noWrapper?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionPushConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._pushEndpoint = undefined;
      this._noWrapper.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._pushEndpoint = value.pushEndpoint;
      this._noWrapper.internalValue = value.noWrapper;
      this._oidcToken.internalValue = value.oidcToken;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // push_endpoint - computed: false, optional: false, required: true
  private _pushEndpoint?: string; 
  public get pushEndpoint() {
    return this.getStringAttribute('push_endpoint');
  }
  public set pushEndpoint(value: string) {
    this._pushEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEndpointInput() {
    return this._pushEndpoint;
  }

  // no_wrapper - computed: false, optional: true, required: false
  private _noWrapper = new PubsubSubscriptionPushConfigNoWrapperOutputReference(this, "no_wrapper");
  public get noWrapper() {
    return this._noWrapper;
  }
  public putNoWrapper(value: PubsubSubscriptionPushConfigNoWrapper) {
    this._noWrapper.internalValue = value;
  }
  public resetNoWrapper() {
    this._noWrapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWrapperInput() {
    return this._noWrapper.internalValue;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new PubsubSubscriptionPushConfigOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: PubsubSubscriptionPushConfigOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }
}
export interface PubsubSubscriptionRetryPolicy {
  /**
  * The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#maximum_backoff PubsubSubscription#maximum_backoff}
  */
  readonly maximumBackoff?: string;
  /**
  * The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#minimum_backoff PubsubSubscription#minimum_backoff}
  */
  readonly minimumBackoff?: string;
}

export function pubsubSubscriptionRetryPolicyToTerraform(struct?: PubsubSubscriptionRetryPolicyOutputReference | PubsubSubscriptionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_backoff: cdktn.stringToTerraform(struct!.maximumBackoff),
    minimum_backoff: cdktn.stringToTerraform(struct!.minimumBackoff),
  }
}


export function pubsubSubscriptionRetryPolicyToHclTerraform(struct?: PubsubSubscriptionRetryPolicyOutputReference | PubsubSubscriptionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_backoff: {
      value: cdktn.stringToHclTerraform(struct!.maximumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_backoff: {
      value: cdktn.stringToHclTerraform(struct!.minimumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubSubscriptionRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBackoff = this._maximumBackoff;
    }
    if (this._minimumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBackoff = this._minimumBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBackoff = undefined;
      this._minimumBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBackoff = value.maximumBackoff;
      this._minimumBackoff = value.minimumBackoff;
    }
  }

  // maximum_backoff - computed: true, optional: true, required: false
  private _maximumBackoff?: string; 
  public get maximumBackoff() {
    return this.getStringAttribute('maximum_backoff');
  }
  public set maximumBackoff(value: string) {
    this._maximumBackoff = value;
  }
  public resetMaximumBackoff() {
    this._maximumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBackoffInput() {
    return this._maximumBackoff;
  }

  // minimum_backoff - computed: true, optional: true, required: false
  private _minimumBackoff?: string; 
  public get minimumBackoff() {
    return this.getStringAttribute('minimum_backoff');
  }
  public set minimumBackoff(value: string) {
    this._minimumBackoff = value;
  }
  public resetMinimumBackoff() {
    this._minimumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBackoffInput() {
    return this._minimumBackoff;
  }
}
export interface PubsubSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#create PubsubSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#update PubsubSubscription#update}
  */
  readonly update?: string;
}

export function pubsubSubscriptionTimeoutsToTerraform(struct?: PubsubSubscriptionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function pubsubSubscriptionTimeoutsToHclTerraform(struct?: PubsubSubscriptionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class PubsubSubscriptionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PubsubSubscriptionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PubsubSubscriptionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription google_pubsub_subscription}
*/
export class PubsubSubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PubsubSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PubsubSubscription to import
  * @param importFromId The id of the existing PubsubSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PubsubSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_pubsub_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/pubsub_subscription google_pubsub_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._ackDeadlineSeconds = config.ackDeadlineSeconds;
    this._deletionPolicy = config.deletionPolicy;
    this._enableExactlyOnceDelivery = config.enableExactlyOnceDelivery;
    this._enableMessageOrdering = config.enableMessageOrdering;
    this._filter = config.filter;
    this._id = config.id;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._retainAckedMessages = config.retainAckedMessages;
    this._tags = config.tags;
    this._topic = config.topic;
    this._bigqueryConfig.internalValue = config.bigqueryConfig;
    this._cloudStorageConfig.internalValue = config.cloudStorageConfig;
    this._deadLetterPolicy.internalValue = config.deadLetterPolicy;
    this._expirationPolicy.internalValue = config.expirationPolicy;
    this._messageTransforms.internalValue = config.messageTransforms;
    this._pushConfig.internalValue = config.pushConfig;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_deadline_seconds - computed: true, optional: true, required: false
  private _ackDeadlineSeconds?: number; 
  public get ackDeadlineSeconds() {
    return this.getNumberAttribute('ack_deadline_seconds');
  }
  public set ackDeadlineSeconds(value: number) {
    this._ackDeadlineSeconds = value;
  }
  public resetAckDeadlineSeconds() {
    this._ackDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDeadlineSecondsInput() {
    return this._ackDeadlineSeconds;
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

  // enable_exactly_once_delivery - computed: false, optional: true, required: false
  private _enableExactlyOnceDelivery?: boolean | cdktn.IResolvable; 
  public get enableExactlyOnceDelivery() {
    return this.getBooleanAttribute('enable_exactly_once_delivery');
  }
  public set enableExactlyOnceDelivery(value: boolean | cdktn.IResolvable) {
    this._enableExactlyOnceDelivery = value;
  }
  public resetEnableExactlyOnceDelivery() {
    this._enableExactlyOnceDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExactlyOnceDeliveryInput() {
    return this._enableExactlyOnceDelivery;
  }

  // enable_message_ordering - computed: false, optional: true, required: false
  private _enableMessageOrdering?: boolean | cdktn.IResolvable; 
  public get enableMessageOrdering() {
    return this.getBooleanAttribute('enable_message_ordering');
  }
  public set enableMessageOrdering(value: boolean | cdktn.IResolvable) {
    this._enableMessageOrdering = value;
  }
  public resetEnableMessageOrdering() {
    this._enableMessageOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMessageOrderingInput() {
    return this._enableMessageOrdering;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string; 
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }
  public set messageRetentionDuration(value: string) {
    this._messageRetentionDuration = value;
  }
  public resetMessageRetentionDuration() {
    this._messageRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionDurationInput() {
    return this._messageRetentionDuration;
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

  // retain_acked_messages - computed: false, optional: true, required: false
  private _retainAckedMessages?: boolean | cdktn.IResolvable; 
  public get retainAckedMessages() {
    return this.getBooleanAttribute('retain_acked_messages');
  }
  public set retainAckedMessages(value: boolean | cdktn.IResolvable) {
    this._retainAckedMessages = value;
  }
  public resetRetainAckedMessages() {
    this._retainAckedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAckedMessagesInput() {
    return this._retainAckedMessages;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // bigquery_config - computed: false, optional: true, required: false
  private _bigqueryConfig = new PubsubSubscriptionBigqueryConfigOutputReference(this, "bigquery_config");
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }
  public putBigqueryConfig(value: PubsubSubscriptionBigqueryConfig) {
    this._bigqueryConfig.internalValue = value;
  }
  public resetBigqueryConfig() {
    this._bigqueryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConfigInput() {
    return this._bigqueryConfig.internalValue;
  }

  // cloud_storage_config - computed: false, optional: true, required: false
  private _cloudStorageConfig = new PubsubSubscriptionCloudStorageConfigOutputReference(this, "cloud_storage_config");
  public get cloudStorageConfig() {
    return this._cloudStorageConfig;
  }
  public putCloudStorageConfig(value: PubsubSubscriptionCloudStorageConfig) {
    this._cloudStorageConfig.internalValue = value;
  }
  public resetCloudStorageConfig() {
    this._cloudStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageConfigInput() {
    return this._cloudStorageConfig.internalValue;
  }

  // dead_letter_policy - computed: false, optional: true, required: false
  private _deadLetterPolicy = new PubsubSubscriptionDeadLetterPolicyOutputReference(this, "dead_letter_policy");
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }
  public putDeadLetterPolicy(value: PubsubSubscriptionDeadLetterPolicy) {
    this._deadLetterPolicy.internalValue = value;
  }
  public resetDeadLetterPolicy() {
    this._deadLetterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterPolicyInput() {
    return this._deadLetterPolicy.internalValue;
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy = new PubsubSubscriptionExpirationPolicyOutputReference(this, "expiration_policy");
  public get expirationPolicy() {
    return this._expirationPolicy;
  }
  public putExpirationPolicy(value: PubsubSubscriptionExpirationPolicy) {
    this._expirationPolicy.internalValue = value;
  }
  public resetExpirationPolicy() {
    this._expirationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyInput() {
    return this._expirationPolicy.internalValue;
  }

  // message_transforms - computed: false, optional: true, required: false
  private _messageTransforms = new PubsubSubscriptionMessageTransformsList(this, "message_transforms", false);
  public get messageTransforms() {
    return this._messageTransforms;
  }
  public putMessageTransforms(value: PubsubSubscriptionMessageTransforms[] | cdktn.IResolvable) {
    this._messageTransforms.internalValue = value;
  }
  public resetMessageTransforms() {
    this._messageTransforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTransformsInput() {
    return this._messageTransforms.internalValue;
  }

  // push_config - computed: false, optional: true, required: false
  private _pushConfig = new PubsubSubscriptionPushConfigOutputReference(this, "push_config");
  public get pushConfig() {
    return this._pushConfig;
  }
  public putPushConfig(value: PubsubSubscriptionPushConfig) {
    this._pushConfig.internalValue = value;
  }
  public resetPushConfig() {
    this._pushConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushConfigInput() {
    return this._pushConfig.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new PubsubSubscriptionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: PubsubSubscriptionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PubsubSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PubsubSubscriptionTimeouts) {
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
      ack_deadline_seconds: cdktn.numberToTerraform(this._ackDeadlineSeconds),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      enable_exactly_once_delivery: cdktn.booleanToTerraform(this._enableExactlyOnceDelivery),
      enable_message_ordering: cdktn.booleanToTerraform(this._enableMessageOrdering),
      filter: cdktn.stringToTerraform(this._filter),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      message_retention_duration: cdktn.stringToTerraform(this._messageRetentionDuration),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      retain_acked_messages: cdktn.booleanToTerraform(this._retainAckedMessages),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      topic: cdktn.stringToTerraform(this._topic),
      bigquery_config: pubsubSubscriptionBigqueryConfigToTerraform(this._bigqueryConfig.internalValue),
      cloud_storage_config: pubsubSubscriptionCloudStorageConfigToTerraform(this._cloudStorageConfig.internalValue),
      dead_letter_policy: pubsubSubscriptionDeadLetterPolicyToTerraform(this._deadLetterPolicy.internalValue),
      expiration_policy: pubsubSubscriptionExpirationPolicyToTerraform(this._expirationPolicy.internalValue),
      message_transforms: cdktn.listMapper(pubsubSubscriptionMessageTransformsToTerraform, true)(this._messageTransforms.internalValue),
      push_config: pubsubSubscriptionPushConfigToTerraform(this._pushConfig.internalValue),
      retry_policy: pubsubSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      timeouts: pubsubSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_deadline_seconds: {
        value: cdktn.numberToHclTerraform(this._ackDeadlineSeconds),
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
      enable_exactly_once_delivery: {
        value: cdktn.booleanToHclTerraform(this._enableExactlyOnceDelivery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_message_ordering: {
        value: cdktn.booleanToHclTerraform(this._enableMessageOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktn.stringToHclTerraform(this._filter),
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
      message_retention_duration: {
        value: cdktn.stringToHclTerraform(this._messageRetentionDuration),
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
      retain_acked_messages: {
        value: cdktn.booleanToHclTerraform(this._retainAckedMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topic: {
        value: cdktn.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_config: {
        value: pubsubSubscriptionBigqueryConfigToHclTerraform(this._bigqueryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionBigqueryConfigList",
      },
      cloud_storage_config: {
        value: pubsubSubscriptionCloudStorageConfigToHclTerraform(this._cloudStorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionCloudStorageConfigList",
      },
      dead_letter_policy: {
        value: pubsubSubscriptionDeadLetterPolicyToHclTerraform(this._deadLetterPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionDeadLetterPolicyList",
      },
      expiration_policy: {
        value: pubsubSubscriptionExpirationPolicyToHclTerraform(this._expirationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionExpirationPolicyList",
      },
      message_transforms: {
        value: cdktn.listMapperHcl(pubsubSubscriptionMessageTransformsToHclTerraform, true)(this._messageTransforms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionMessageTransformsList",
      },
      push_config: {
        value: pubsubSubscriptionPushConfigToHclTerraform(this._pushConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionPushConfigList",
      },
      retry_policy: {
        value: pubsubSubscriptionRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubSubscriptionRetryPolicyList",
      },
      timeouts: {
        value: pubsubSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PubsubSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
