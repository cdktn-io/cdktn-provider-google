# `pubsubSubscription` Submodule <a name="`pubsubSubscription` Submodule" id="@cdktn/provider-google.pubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscription <a name="PubsubSubscription" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscription;

PubsubSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .topic(java.lang.String)
//  .ackDeadlineSeconds(java.lang.Number)
//  .bigqueryConfig(PubsubSubscriptionBigqueryConfig)
//  .cloudStorageConfig(PubsubSubscriptionCloudStorageConfig)
//  .deadLetterPolicy(PubsubSubscriptionDeadLetterPolicy)
//  .deletionPolicy(java.lang.String)
//  .enableExactlyOnceDelivery(java.lang.Boolean|IResolvable)
//  .enableMessageOrdering(java.lang.Boolean|IResolvable)
//  .expirationPolicy(PubsubSubscriptionExpirationPolicy)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .messageRetentionDuration(java.lang.String)
//  .messageTransforms(IResolvable|java.util.List<PubsubSubscriptionMessageTransforms>)
//  .project(java.lang.String)
//  .pushConfig(PubsubSubscriptionPushConfig)
//  .retainAckedMessages(java.lang.Boolean|IResolvable)
//  .retryPolicy(PubsubSubscriptionRetryPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PubsubSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.topic">topic</a></code> | <code>java.lang.String</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableMessageOrdering">enableMessageOrdering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.messageTransforms">messageTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>></code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retainAckedMessages">retainAckedMessages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#name PubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.topic"></a>

- *Type:* java.lang.String

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#topic PubsubSubscription#topic}

---

##### `ackDeadlineSeconds`<sup>Optional</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.ackDeadlineSeconds"></a>

- *Type:* java.lang.Number

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}

---

##### `bigqueryConfig`<sup>Optional</sup> <a name="bigqueryConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.bigqueryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}

---

##### `cloudStorageConfig`<sup>Optional</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.cloudStorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#cloud_storage_config PubsubSubscription#cloud_storage_config}

---

##### `deadLetterPolicy`<sup>Optional</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.deadLetterPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#deletion_policy PubsubSubscription#deletion_policy}

---

##### `enableExactlyOnceDelivery`<sup>Optional</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableExactlyOnceDelivery"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}

---

##### `enableMessageOrdering`<sup>Optional</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableMessageOrdering"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}

---

##### `expirationPolicy`<sup>Optional</sup> <a name="expirationPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.expirationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#filter PubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#labels PubsubSubscription#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.messageRetentionDuration"></a>

- *Type:* java.lang.String

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.messageTransforms"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>>

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#message_transforms PubsubSubscription#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}.

---

##### `pushConfig`<sup>Optional</sup> <a name="pushConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.pushConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#push_config PubsubSubscription#push_config}

---

##### `retainAckedMessages`<sup>Optional</sup> <a name="retainAckedMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retainAckedMessages"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

Resource manager tags to be bound to the subscription. Tag
keys and values have the same definition as resource manager tags. Keys
must be in the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#tags PubsubSubscription#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#timeouts PubsubSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig">putBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig">putCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy">putDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy">putExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putMessageTransforms">putMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig">putPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetAckDeadlineSeconds">resetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetBigqueryConfig">resetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetCloudStorageConfig">resetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetDeadLetterPolicy">resetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetEnableExactlyOnceDelivery">resetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetEnableMessageOrdering">resetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetExpirationPolicy">resetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetMessageTransforms">resetMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetPushConfig">resetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetRetainAckedMessages">resetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryConfig` <a name="putBigqueryConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig"></a>

```java
public void putBigqueryConfig(PubsubSubscriptionBigqueryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---

##### `putCloudStorageConfig` <a name="putCloudStorageConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig"></a>

```java
public void putCloudStorageConfig(PubsubSubscriptionCloudStorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---

##### `putDeadLetterPolicy` <a name="putDeadLetterPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy"></a>

```java
public void putDeadLetterPolicy(PubsubSubscriptionDeadLetterPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---

##### `putExpirationPolicy` <a name="putExpirationPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy"></a>

```java
public void putExpirationPolicy(PubsubSubscriptionExpirationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---

##### `putMessageTransforms` <a name="putMessageTransforms" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putMessageTransforms"></a>

```java
public void putMessageTransforms(IResolvable|java.util.List<PubsubSubscriptionMessageTransforms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putMessageTransforms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>>

---

##### `putPushConfig` <a name="putPushConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig"></a>

```java
public void putPushConfig(PubsubSubscriptionPushConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy"></a>

```java
public void putRetryPolicy(PubsubSubscriptionRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts"></a>

```java
public void putTimeouts(PubsubSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

---

##### `resetAckDeadlineSeconds` <a name="resetAckDeadlineSeconds" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetAckDeadlineSeconds"></a>

```java
public void resetAckDeadlineSeconds()
```

##### `resetBigqueryConfig` <a name="resetBigqueryConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetBigqueryConfig"></a>

```java
public void resetBigqueryConfig()
```

##### `resetCloudStorageConfig` <a name="resetCloudStorageConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetCloudStorageConfig"></a>

```java
public void resetCloudStorageConfig()
```

##### `resetDeadLetterPolicy` <a name="resetDeadLetterPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetDeadLetterPolicy"></a>

```java
public void resetDeadLetterPolicy()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEnableExactlyOnceDelivery` <a name="resetEnableExactlyOnceDelivery" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetEnableExactlyOnceDelivery"></a>

```java
public void resetEnableExactlyOnceDelivery()
```

##### `resetEnableMessageOrdering` <a name="resetEnableMessageOrdering" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetEnableMessageOrdering"></a>

```java
public void resetEnableMessageOrdering()
```

##### `resetExpirationPolicy` <a name="resetExpirationPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetExpirationPolicy"></a>

```java
public void resetExpirationPolicy()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetMessageRetentionDuration"></a>

```java
public void resetMessageRetentionDuration()
```

##### `resetMessageTransforms` <a name="resetMessageTransforms" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetMessageTransforms"></a>

```java
public void resetMessageTransforms()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetProject"></a>

```java
public void resetProject()
```

##### `resetPushConfig` <a name="resetPushConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetPushConfig"></a>

```java
public void resetPushConfig()
```

##### `resetRetainAckedMessages` <a name="resetRetainAckedMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetRetainAckedMessages"></a>

```java
public void resetRetainAckedMessages()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PubsubSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isConstruct"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscription;

PubsubSubscription.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscription;

PubsubSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscription;

PubsubSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscription;

PubsubSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PubsubSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PubsubSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PubsubSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference">PubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference">PubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference">PubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference">PubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageTransforms">messageTransforms</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList">PubsubSubscriptionMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference">PubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference">PubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference">PubsubSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSecondsInput">ackDeadlineSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfigInput">bigqueryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfigInput">cloudStorageConfigInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicyInput">deadLetterPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDeliveryInput">enableExactlyOnceDeliveryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrderingInput">enableMessageOrderingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicyInput">expirationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageTransformsInput">messageTransformsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfigInput">pushConfigInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessagesInput">retainAckedMessagesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessages">retainAckedMessages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigqueryConfig`<sup>Required</sup> <a name="bigqueryConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfig"></a>

```java
public PubsubSubscriptionBigqueryConfigOutputReference getBigqueryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference">PubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `cloudStorageConfig`<sup>Required</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfig"></a>

```java
public PubsubSubscriptionCloudStorageConfigOutputReference getCloudStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference">PubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `deadLetterPolicy`<sup>Required</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicy"></a>

```java
public PubsubSubscriptionDeadLetterPolicyOutputReference getDeadLetterPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference">PubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `expirationPolicy`<sup>Required</sup> <a name="expirationPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicy"></a>

```java
public PubsubSubscriptionExpirationPolicyOutputReference getExpirationPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference">PubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `messageTransforms`<sup>Required</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageTransforms"></a>

```java
public PubsubSubscriptionMessageTransformsList getMessageTransforms();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList">PubsubSubscriptionMessageTransformsList</a>

---

##### `pushConfig`<sup>Required</sup> <a name="pushConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfig"></a>

```java
public PubsubSubscriptionPushConfigOutputReference getPushConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference">PubsubSubscriptionPushConfigOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicy"></a>

```java
public PubsubSubscriptionRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference">PubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.timeouts"></a>

```java
public PubsubSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference">PubsubSubscriptionTimeoutsOutputReference</a>

---

##### `ackDeadlineSecondsInput`<sup>Optional</sup> <a name="ackDeadlineSecondsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSecondsInput"></a>

```java
public java.lang.Number getAckDeadlineSecondsInput();
```

- *Type:* java.lang.Number

---

##### `bigqueryConfigInput`<sup>Optional</sup> <a name="bigqueryConfigInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfigInput"></a>

```java
public PubsubSubscriptionBigqueryConfig getBigqueryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---

##### `cloudStorageConfigInput`<sup>Optional</sup> <a name="cloudStorageConfigInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfigInput"></a>

```java
public PubsubSubscriptionCloudStorageConfig getCloudStorageConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---

##### `deadLetterPolicyInput`<sup>Optional</sup> <a name="deadLetterPolicyInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicyInput"></a>

```java
public PubsubSubscriptionDeadLetterPolicy getDeadLetterPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="enableExactlyOnceDeliveryInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDeliveryInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableExactlyOnceDeliveryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMessageOrderingInput`<sup>Optional</sup> <a name="enableMessageOrderingInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrderingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMessageOrderingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expirationPolicyInput`<sup>Optional</sup> <a name="expirationPolicyInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicyInput"></a>

```java
public PubsubSubscriptionExpirationPolicy getExpirationPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDurationInput"></a>

```java
public java.lang.String getMessageRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `messageTransformsInput`<sup>Optional</sup> <a name="messageTransformsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageTransformsInput"></a>

```java
public IResolvable|java.util.List<PubsubSubscriptionMessageTransforms> getMessageTransformsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushConfigInput`<sup>Optional</sup> <a name="pushConfigInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfigInput"></a>

```java
public PubsubSubscriptionPushConfig getPushConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---

##### `retainAckedMessagesInput`<sup>Optional</sup> <a name="retainAckedMessagesInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessagesInput"></a>

```java
public java.lang.Boolean|IResolvable getRetainAckedMessagesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicyInput"></a>

```java
public PubsubSubscriptionRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.timeoutsInput"></a>

```java
public IResolvable|PubsubSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `ackDeadlineSeconds`<sup>Required</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSeconds"></a>

```java
public java.lang.Number getAckDeadlineSeconds();
```

- *Type:* java.lang.Number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `enableExactlyOnceDelivery`<sup>Required</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDelivery"></a>

```java
public java.lang.Boolean|IResolvable getEnableExactlyOnceDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMessageOrdering`<sup>Required</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrdering"></a>

```java
public java.lang.Boolean|IResolvable getEnableMessageOrdering();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retainAckedMessages`<sup>Required</sup> <a name="retainAckedMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessages"></a>

```java
public java.lang.Boolean|IResolvable getRetainAckedMessages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionBigqueryConfig <a name="PubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionBigqueryConfig;

PubsubSubscriptionBigqueryConfig.builder()
    .table(java.lang.String)
//  .dropUnknownFields(java.lang.Boolean|IResolvable)
//  .serviceAccountEmail(java.lang.String)
//  .useTableSchema(java.lang.Boolean|IResolvable)
//  .useTopicSchema(java.lang.Boolean|IResolvable)
//  .writeMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.table">table</a></code> | <code>java.lang.String</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.dropUnknownFields">dropUnknownFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTableSchema">useTableSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#table PubsubSubscription#table}

---

##### `dropUnknownFields`<sup>Optional</sup> <a name="dropUnknownFields" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```java
public java.lang.Boolean|IResolvable getDropUnknownFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#drop_unknown_fields PubsubSubscription#drop_unknown_fields}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

##### `useTableSchema`<sup>Optional</sup> <a name="useTableSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTableSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#use_table_schema PubsubSubscription#use_table_schema}

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionCloudStorageConfig <a name="PubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionCloudStorageConfig;

PubsubSubscriptionCloudStorageConfig.builder()
    .bucket(java.lang.String)
//  .avroConfig(PubsubSubscriptionCloudStorageConfigAvroConfig)
//  .filenameDatetimeFormat(java.lang.String)
//  .filenamePrefix(java.lang.String)
//  .filenameSuffix(java.lang.String)
//  .maxBytes(java.lang.Number)
//  .maxDuration(java.lang.String)
//  .maxMessages(java.lang.Number)
//  .serviceAccountEmail(java.lang.String)
//  .textConfig(PubsubSubscriptionCloudStorageConfigTextConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>java.lang.String</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenamePrefix">filenamePrefix</a></code> | <code>java.lang.String</code> | User-provided prefix for Cloud Storage filename. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameSuffix">filenameSuffix</a></code> | <code>java.lang.String</code> | User-provided suffix for Cloud Storage filename. Must not end in "/". |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxBytes">maxBytes</a></code> | <code>java.lang.Number</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxDuration">maxDuration</a></code> | <code>java.lang.String</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxMessages">maxMessages</a></code> | <code>java.lang.Number</code> | The maximum messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.textConfig">textConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a></code> | text_config block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#bucket PubsubSubscription#bucket}

---

##### `avroConfig`<sup>Optional</sup> <a name="avroConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```java
public PubsubSubscriptionCloudStorageConfigAvroConfig getAvroConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#avro_config PubsubSubscription#avro_config}

---

##### `filenameDatetimeFormat`<sup>Optional</sup> <a name="filenameDatetimeFormat" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```java
public java.lang.String getFilenameDatetimeFormat();
```

- *Type:* java.lang.String

User-provided format string specifying how to represent datetimes in Cloud Storage filenames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#filename_datetime_format PubsubSubscription#filename_datetime_format}

---

##### `filenamePrefix`<sup>Optional</sup> <a name="filenamePrefix" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```java
public java.lang.String getFilenamePrefix();
```

- *Type:* java.lang.String

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#filename_prefix PubsubSubscription#filename_prefix}

---

##### `filenameSuffix`<sup>Optional</sup> <a name="filenameSuffix" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```java
public java.lang.String getFilenameSuffix();
```

- *Type:* java.lang.String

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#filename_suffix PubsubSubscription#filename_suffix}

---

##### `maxBytes`<sup>Optional</sup> <a name="maxBytes" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```java
public java.lang.Number getMaxBytes();
```

- *Type:* java.lang.Number

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#max_bytes PubsubSubscription#max_bytes}

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```java
public java.lang.String getMaxDuration();
```

- *Type:* java.lang.String

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#max_duration PubsubSubscription#max_duration}

---

##### `maxMessages`<sup>Optional</sup> <a name="maxMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```java
public java.lang.Number getMaxMessages();
```

- *Type:* java.lang.Number

The maximum messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#max_messages PubsubSubscription#max_messages}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

##### `textConfig`<sup>Optional</sup> <a name="textConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.textConfig"></a>

```java
public PubsubSubscriptionCloudStorageConfigTextConfig getTextConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a>

text_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#text_config PubsubSubscription#text_config}

---

### PubsubSubscriptionCloudStorageConfigAvroConfig <a name="PubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionCloudStorageConfigAvroConfig;

PubsubSubscriptionCloudStorageConfigAvroConfig.builder()
//  .useTopicSchema(java.lang.Boolean|IResolvable)
//  .writeMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output. |

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionCloudStorageConfigTextConfig <a name="PubsubSubscriptionCloudStorageConfigTextConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionCloudStorageConfigTextConfig;

PubsubSubscriptionCloudStorageConfigTextConfig.builder()
    .build();
```


### PubsubSubscriptionConfig <a name="PubsubSubscriptionConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionConfig;

PubsubSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .topic(java.lang.String)
//  .ackDeadlineSeconds(java.lang.Number)
//  .bigqueryConfig(PubsubSubscriptionBigqueryConfig)
//  .cloudStorageConfig(PubsubSubscriptionCloudStorageConfig)
//  .deadLetterPolicy(PubsubSubscriptionDeadLetterPolicy)
//  .deletionPolicy(java.lang.String)
//  .enableExactlyOnceDelivery(java.lang.Boolean|IResolvable)
//  .enableMessageOrdering(java.lang.Boolean|IResolvable)
//  .expirationPolicy(PubsubSubscriptionExpirationPolicy)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .messageRetentionDuration(java.lang.String)
//  .messageTransforms(IResolvable|java.util.List<PubsubSubscriptionMessageTransforms>)
//  .project(java.lang.String)
//  .pushConfig(PubsubSubscriptionPushConfig)
//  .retainAckedMessages(java.lang.Boolean|IResolvable)
//  .retryPolicy(PubsubSubscriptionRetryPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PubsubSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.topic">topic</a></code> | <code>java.lang.String</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageTransforms">messageTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>></code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retainAckedMessages">retainAckedMessages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#name PubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#topic PubsubSubscription#topic}

---

##### `ackDeadlineSeconds`<sup>Optional</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.ackDeadlineSeconds"></a>

```java
public java.lang.Number getAckDeadlineSeconds();
```

- *Type:* java.lang.Number

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}

---

##### `bigqueryConfig`<sup>Optional</sup> <a name="bigqueryConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.bigqueryConfig"></a>

```java
public PubsubSubscriptionBigqueryConfig getBigqueryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}

---

##### `cloudStorageConfig`<sup>Optional</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.cloudStorageConfig"></a>

```java
public PubsubSubscriptionCloudStorageConfig getCloudStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#cloud_storage_config PubsubSubscription#cloud_storage_config}

---

##### `deadLetterPolicy`<sup>Optional</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deadLetterPolicy"></a>

```java
public PubsubSubscriptionDeadLetterPolicy getDeadLetterPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#deletion_policy PubsubSubscription#deletion_policy}

---

##### `enableExactlyOnceDelivery`<sup>Optional</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableExactlyOnceDelivery"></a>

```java
public java.lang.Boolean|IResolvable getEnableExactlyOnceDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}

---

##### `enableMessageOrdering`<sup>Optional</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableMessageOrdering"></a>

```java
public java.lang.Boolean|IResolvable getEnableMessageOrdering();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}

---

##### `expirationPolicy`<sup>Optional</sup> <a name="expirationPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.expirationPolicy"></a>

```java
public PubsubSubscriptionExpirationPolicy getExpirationPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#filter PubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#labels PubsubSubscription#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageTransforms"></a>

```java
public IResolvable|java.util.List<PubsubSubscriptionMessageTransforms> getMessageTransforms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>>

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#message_transforms PubsubSubscription#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}.

---

##### `pushConfig`<sup>Optional</sup> <a name="pushConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.pushConfig"></a>

```java
public PubsubSubscriptionPushConfig getPushConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#push_config PubsubSubscription#push_config}

---

##### `retainAckedMessages`<sup>Optional</sup> <a name="retainAckedMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retainAckedMessages"></a>

```java
public java.lang.Boolean|IResolvable getRetainAckedMessages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retryPolicy"></a>

```java
public PubsubSubscriptionRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

Resource manager tags to be bound to the subscription. Tag
keys and values have the same definition as resource manager tags. Keys
must be in the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#tags PubsubSubscription#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.timeouts"></a>

```java
public PubsubSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#timeouts PubsubSubscription#timeouts}

---

### PubsubSubscriptionDeadLetterPolicy <a name="PubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionDeadLetterPolicy;

PubsubSubscriptionDeadLetterPolicy.builder()
//  .deadLetterTopic(java.lang.String)
//  .maxDeliveryAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">deadLetterTopic</a></code> | <code>java.lang.String</code> | The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of delivery attempts for any message. The value must be between 5 and 100. |

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```java
public java.lang.String getDeadLetterTopic();
```

- *Type:* java.lang.String

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#dead_letter_topic PubsubSubscription#dead_letter_topic}

---

##### `maxDeliveryAttempts`<sup>Optional</sup> <a name="maxDeliveryAttempts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#max_delivery_attempts PubsubSubscription#max_delivery_attempts}

---

### PubsubSubscriptionExpirationPolicy <a name="PubsubSubscriptionExpirationPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionExpirationPolicy;

PubsubSubscriptionExpirationPolicy.builder()
    .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#ttl PubsubSubscription#ttl}

---

### PubsubSubscriptionMessageTransforms <a name="PubsubSubscriptionMessageTransforms" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransforms;

PubsubSubscriptionMessageTransforms.builder()
//  .aiInference(PubsubSubscriptionMessageTransformsAiInference)
//  .disabled(java.lang.Boolean|IResolvable)
//  .javascriptUdf(PubsubSubscriptionMessageTransformsJavascriptUdf)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a></code> | ai_inference block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether or not to use this transform. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | javascript_udf block. |

---

##### `aiInference`<sup>Optional</sup> <a name="aiInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.property.aiInference"></a>

```java
public PubsubSubscriptionMessageTransformsAiInference getAiInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a>

ai_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#ai_inference PubsubSubscription#ai_inference}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether or not to use this transform.

If not set or 'false',
the transform will be applied to messages. Default: 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#disabled PubsubSubscription#disabled}

---

##### `javascriptUdf`<sup>Optional</sup> <a name="javascriptUdf" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms.property.javascriptUdf"></a>

```java
public PubsubSubscriptionMessageTransformsJavascriptUdf getJavascriptUdf();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a>

javascript_udf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#javascript_udf PubsubSubscription#javascript_udf}

---

### PubsubSubscriptionMessageTransformsAiInference <a name="PubsubSubscriptionMessageTransformsAiInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsAiInference;

PubsubSubscriptionMessageTransformsAiInference.builder()
    .endpoint(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .unstructuredInference(PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to make prediction requests against endpoints. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | unstructured_inference block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'.

Vertex AI API requests will be sent to this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#endpoint PubsubSubscription#endpoint}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to make prediction requests against endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

##### `unstructuredInference`<sup>Optional</sup> <a name="unstructuredInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference.property.unstructuredInference"></a>

```java
public PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference getUnstructuredInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

unstructured_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#unstructured_inference PubsubSubscription#unstructured_inference}

---

### PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference <a name="PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference;

PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.builder()
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A parameters object to be included in each inference request. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A parameters object to be included in each inference request.

The parameters object is combined with the data field of the Pub/Sub
message to form the inference request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#parameters PubsubSubscription#parameters}

---

### PubsubSubscriptionMessageTransformsJavascriptUdf <a name="PubsubSubscriptionMessageTransformsJavascriptUdf" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsJavascriptUdf;

PubsubSubscriptionMessageTransformsJavascriptUdf.builder()
    .code(java.lang.String)
    .functionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf.property.code">code</a></code> | <code>java.lang.String</code> | JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Name of the JavaScript function that should be applied to Pub/Sub messages. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message.

* *

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Name of the JavaScript function that should be applied to Pub/Sub messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#function_name PubsubSubscription#function_name}

---

### PubsubSubscriptionPushConfig <a name="PubsubSubscriptionPushConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionPushConfig;

PubsubSubscriptionPushConfig.builder()
    .pushEndpoint(java.lang.String)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .noWrapper(PubsubSubscriptionPushConfigNoWrapper)
//  .oidcToken(PubsubSubscriptionPushConfigOidcToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.pushEndpoint">pushEndpoint</a></code> | <code>java.lang.String</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Endpoint configuration attributes. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```java
public java.lang.String getPushEndpoint();
```

- *Type:* java.lang.String

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#push_endpoint PubsubSubscription#push_endpoint}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Endpoint configuration attributes.

Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.

The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.

If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.

The possible values for this attribute are:

* v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
* v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#attributes PubsubSubscription#attributes}

---

##### `noWrapper`<sup>Optional</sup> <a name="noWrapper" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.noWrapper"></a>

```java
public PubsubSubscriptionPushConfigNoWrapper getNoWrapper();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#no_wrapper PubsubSubscription#no_wrapper}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.oidcToken"></a>

```java
public PubsubSubscriptionPushConfigOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#oidc_token PubsubSubscription#oidc_token}

---

### PubsubSubscriptionPushConfigNoWrapper <a name="PubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionPushConfigNoWrapper;

PubsubSubscriptionPushConfigNoWrapper.builder()
    .writeMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionPushConfigOidcToken <a name="PubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionPushConfigOidcToken;

PubsubSubscriptionPushConfigOidcToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .audience(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating the OIDC token. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#audience PubsubSubscription#audience}

---

### PubsubSubscriptionRetryPolicy <a name="PubsubSubscriptionRetryPolicy" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionRetryPolicy;

PubsubSubscriptionRetryPolicy.builder()
//  .maximumBackoff(java.lang.String)
//  .minimumBackoff(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#maximum_backoff PubsubSubscription#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#minimum_backoff PubsubSubscription#minimum_backoff}

---

### PubsubSubscriptionTimeouts <a name="PubsubSubscriptionTimeouts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionTimeouts;

PubsubSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#create PubsubSubscription#create}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#update PubsubSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#create PubsubSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_subscription#update PubsubSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubSubscriptionBigqueryConfigOutputReference <a name="PubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionBigqueryConfigOutputReference;

new PubsubSubscriptionBigqueryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">resetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">resetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDropUnknownFields` <a name="resetDropUnknownFields" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```java
public void resetDropUnknownFields()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetUseTableSchema` <a name="resetUseTableSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```java
public void resetUseTableSchema()
```

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```java
public void resetUseTopicSchema()
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```java
public void resetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">dropUnknownFieldsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">useTableSchemaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">dropUnknownFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">useTableSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dropUnknownFieldsInput`<sup>Optional</sup> <a name="dropUnknownFieldsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```java
public java.lang.Boolean|IResolvable getDropUnknownFieldsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `useTableSchemaInput`<sup>Optional</sup> <a name="useTableSchemaInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTableSchemaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchemaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dropUnknownFields`<sup>Required</sup> <a name="dropUnknownFields" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```java
public java.lang.Boolean|IResolvable getDropUnknownFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `useTableSchema`<sup>Required</sup> <a name="useTableSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTableSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionBigqueryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---


### PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference;

new PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```java
public void resetUseTopicSchema()
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```java
public void resetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchemaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionCloudStorageConfigAvroConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### PubsubSubscriptionCloudStorageConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionCloudStorageConfigOutputReference;

new PubsubSubscriptionCloudStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">putAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putTextConfig">putTextConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">resetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">resetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">resetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">resetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">resetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">resetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">resetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetTextConfig">resetTextConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroConfig` <a name="putAvroConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```java
public void putAvroConfig(PubsubSubscriptionCloudStorageConfigAvroConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `putTextConfig` <a name="putTextConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putTextConfig"></a>

```java
public void putTextConfig(PubsubSubscriptionCloudStorageConfigTextConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putTextConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a>

---

##### `resetAvroConfig` <a name="resetAvroConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```java
public void resetAvroConfig()
```

##### `resetFilenameDatetimeFormat` <a name="resetFilenameDatetimeFormat" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```java
public void resetFilenameDatetimeFormat()
```

##### `resetFilenamePrefix` <a name="resetFilenamePrefix" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```java
public void resetFilenamePrefix()
```

##### `resetFilenameSuffix` <a name="resetFilenameSuffix" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```java
public void resetFilenameSuffix()
```

##### `resetMaxBytes` <a name="resetMaxBytes" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```java
public void resetMaxBytes()
```

##### `resetMaxDuration` <a name="resetMaxDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```java
public void resetMaxDuration()
```

##### `resetMaxMessages` <a name="resetMaxMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```java
public void resetMaxMessages()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetTextConfig` <a name="resetTextConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetTextConfig"></a>

```java
public void resetTextConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.textConfig">textConfig</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference">PubsubSubscriptionCloudStorageConfigTextConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">avroConfigInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">filenameDatetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">filenamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">filenameSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">maxBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">maxDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">maxMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.textConfigInput">textConfigInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">filenamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">filenameSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">maxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">maxDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">maxMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avroConfig`<sup>Required</sup> <a name="avroConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```java
public PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference getAvroConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `textConfig`<sup>Required</sup> <a name="textConfig" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.textConfig"></a>

```java
public PubsubSubscriptionCloudStorageConfigTextConfigOutputReference getTextConfig();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference">PubsubSubscriptionCloudStorageConfigTextConfigOutputReference</a>

---

##### `avroConfigInput`<sup>Optional</sup> <a name="avroConfigInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```java
public PubsubSubscriptionCloudStorageConfigAvroConfig getAvroConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `filenameDatetimeFormatInput`<sup>Optional</sup> <a name="filenameDatetimeFormatInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```java
public java.lang.String getFilenameDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `filenamePrefixInput`<sup>Optional</sup> <a name="filenamePrefixInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```java
public java.lang.String getFilenamePrefixInput();
```

- *Type:* java.lang.String

---

##### `filenameSuffixInput`<sup>Optional</sup> <a name="filenameSuffixInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```java
public java.lang.String getFilenameSuffixInput();
```

- *Type:* java.lang.String

---

##### `maxBytesInput`<sup>Optional</sup> <a name="maxBytesInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```java
public java.lang.Number getMaxBytesInput();
```

- *Type:* java.lang.Number

---

##### `maxDurationInput`<sup>Optional</sup> <a name="maxDurationInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```java
public java.lang.String getMaxDurationInput();
```

- *Type:* java.lang.String

---

##### `maxMessagesInput`<sup>Optional</sup> <a name="maxMessagesInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```java
public java.lang.Number getMaxMessagesInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `textConfigInput`<sup>Optional</sup> <a name="textConfigInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.textConfigInput"></a>

```java
public PubsubSubscriptionCloudStorageConfigTextConfig getTextConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `filenameDatetimeFormat`<sup>Required</sup> <a name="filenameDatetimeFormat" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```java
public java.lang.String getFilenameDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `filenamePrefix`<sup>Required</sup> <a name="filenamePrefix" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```java
public java.lang.String getFilenamePrefix();
```

- *Type:* java.lang.String

---

##### `filenameSuffix`<sup>Required</sup> <a name="filenameSuffix" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```java
public java.lang.String getFilenameSuffix();
```

- *Type:* java.lang.String

---

##### `maxBytes`<sup>Required</sup> <a name="maxBytes" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```java
public java.lang.Number getMaxBytes();
```

- *Type:* java.lang.Number

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```java
public java.lang.String getMaxDuration();
```

- *Type:* java.lang.String

---

##### `maxMessages`<sup>Required</sup> <a name="maxMessages" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```java
public java.lang.Number getMaxMessages();
```

- *Type:* java.lang.Number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionCloudStorageConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---


### PubsubSubscriptionCloudStorageConfigTextConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigTextConfigOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference;

new PubsubSubscriptionCloudStorageConfigTextConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionCloudStorageConfigTextConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigTextConfig">PubsubSubscriptionCloudStorageConfigTextConfig</a>

---


### PubsubSubscriptionDeadLetterPolicyOutputReference <a name="PubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionDeadLetterPolicyOutputReference;

new PubsubSubscriptionDeadLetterPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">resetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">resetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeadLetterTopic` <a name="resetDeadLetterTopic" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```java
public void resetDeadLetterTopic()
```

##### `resetMaxDeliveryAttempts` <a name="resetMaxDeliveryAttempts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```java
public void resetMaxDeliveryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">deadLetterTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">maxDeliveryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">deadLetterTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterTopicInput`<sup>Optional</sup> <a name="deadLetterTopicInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```java
public java.lang.String getDeadLetterTopicInput();
```

- *Type:* java.lang.String

---

##### `maxDeliveryAttemptsInput`<sup>Optional</sup> <a name="maxDeliveryAttemptsInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```java
public java.lang.Number getMaxDeliveryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `deadLetterTopic`<sup>Required</sup> <a name="deadLetterTopic" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```java
public java.lang.String getDeadLetterTopic();
```

- *Type:* java.lang.String

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionDeadLetterPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---


### PubsubSubscriptionExpirationPolicyOutputReference <a name="PubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionExpirationPolicyOutputReference;

new PubsubSubscriptionExpirationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionExpirationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---


### PubsubSubscriptionMessageTransformsAiInferenceOutputReference <a name="PubsubSubscriptionMessageTransformsAiInferenceOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference;

new PubsubSubscriptionMessageTransformsAiInferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.putUnstructuredInference">putUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetUnstructuredInference">resetUnstructuredInference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnstructuredInference` <a name="putUnstructuredInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.putUnstructuredInference"></a>

```java
public void putUnstructuredInference(PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.putUnstructuredInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetUnstructuredInference` <a name="resetUnstructuredInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetUnstructuredInference"></a>

```java
public void resetUnstructuredInference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput">unstructuredInferenceInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unstructuredInference`<sup>Required</sup> <a name="unstructuredInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInference"></a>

```java
public PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference getUnstructuredInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInferenceInput`<sup>Optional</sup> <a name="unstructuredInferenceInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput"></a>

```java
public PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference getUnstructuredInferenceInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionMessageTransformsAiInference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a>

---


### PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference <a name="PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference;

new PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">PubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---


### PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference <a name="PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference;

new PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionMessageTransformsJavascriptUdf getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a>

---


### PubsubSubscriptionMessageTransformsList <a name="PubsubSubscriptionMessageTransformsList" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsList;

new PubsubSubscriptionMessageTransformsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.get"></a>

```java
public PubsubSubscriptionMessageTransformsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PubsubSubscriptionMessageTransforms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>>

---


### PubsubSubscriptionMessageTransformsOutputReference <a name="PubsubSubscriptionMessageTransformsOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionMessageTransformsOutputReference;

new PubsubSubscriptionMessageTransformsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.putAiInference">putAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.putJavascriptUdf">putJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resetAiInference">resetAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resetJavascriptUdf">resetJavascriptUdf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAiInference` <a name="putAiInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.putAiInference"></a>

```java
public void putAiInference(PubsubSubscriptionMessageTransformsAiInference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.putAiInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a>

---

##### `putJavascriptUdf` <a name="putJavascriptUdf" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.putJavascriptUdf"></a>

```java
public void putJavascriptUdf(PubsubSubscriptionMessageTransformsJavascriptUdf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.putJavascriptUdf.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a>

---

##### `resetAiInference` <a name="resetAiInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resetAiInference"></a>

```java
public void resetAiInference()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetJavascriptUdf` <a name="resetJavascriptUdf" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.resetJavascriptUdf"></a>

```java
public void resetJavascriptUdf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference">PubsubSubscriptionMessageTransformsAiInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference">PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.aiInferenceInput">aiInferenceInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdfInput">javascriptUdfInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiInference`<sup>Required</sup> <a name="aiInference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.aiInference"></a>

```java
public PubsubSubscriptionMessageTransformsAiInferenceOutputReference getAiInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInferenceOutputReference">PubsubSubscriptionMessageTransformsAiInferenceOutputReference</a>

---

##### `javascriptUdf`<sup>Required</sup> <a name="javascriptUdf" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdf"></a>

```java
public PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference getJavascriptUdf();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference">PubsubSubscriptionMessageTransformsJavascriptUdfOutputReference</a>

---

##### `aiInferenceInput`<sup>Optional</sup> <a name="aiInferenceInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.aiInferenceInput"></a>

```java
public PubsubSubscriptionMessageTransformsAiInference getAiInferenceInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsAiInference">PubsubSubscriptionMessageTransformsAiInference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `javascriptUdfInput`<sup>Optional</sup> <a name="javascriptUdfInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdfInput"></a>

```java
public PubsubSubscriptionMessageTransformsJavascriptUdf getJavascriptUdfInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsJavascriptUdf">PubsubSubscriptionMessageTransformsJavascriptUdf</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransformsOutputReference.property.internalValue"></a>

```java
public IResolvable|PubsubSubscriptionMessageTransforms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionMessageTransforms">PubsubSubscriptionMessageTransforms</a>

---


### PubsubSubscriptionPushConfigNoWrapperOutputReference <a name="PubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionPushConfigNoWrapperOutputReference;

new PubsubSubscriptionPushConfigNoWrapperOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionPushConfigNoWrapper getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---


### PubsubSubscriptionPushConfigOidcTokenOutputReference <a name="PubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionPushConfigOidcTokenOutputReference;

new PubsubSubscriptionPushConfigOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionPushConfigOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---


### PubsubSubscriptionPushConfigOutputReference <a name="PubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionPushConfigOutputReference;

new PubsubSubscriptionPushConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper">putNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetNoWrapper">resetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNoWrapper` <a name="putNoWrapper" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```java
public void putNoWrapper(PubsubSubscriptionPushConfigNoWrapper value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```java
public void putOidcToken(PubsubSubscriptionPushConfigOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetNoWrapper` <a name="resetNoWrapper" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```java
public void resetNoWrapper()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference">PubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference">PubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">noWrapperInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">pushEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">pushEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noWrapper`<sup>Required</sup> <a name="noWrapper" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```java
public PubsubSubscriptionPushConfigNoWrapperOutputReference getNoWrapper();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference">PubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```java
public PubsubSubscriptionPushConfigOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference">PubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `noWrapperInput`<sup>Optional</sup> <a name="noWrapperInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```java
public PubsubSubscriptionPushConfigNoWrapper getNoWrapperInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```java
public PubsubSubscriptionPushConfigOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---

##### `pushEndpointInput`<sup>Optional</sup> <a name="pushEndpointInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```java
public java.lang.String getPushEndpointInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```java
public java.lang.String getPushEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionPushConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---


### PubsubSubscriptionRetryPolicyOutputReference <a name="PubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionRetryPolicyOutputReference;

new PubsubSubscriptionRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```java
public void resetMaximumBackoff()
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```java
public void resetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```java
public java.lang.String getMaximumBackoffInput();
```

- *Type:* java.lang.String

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```java
public java.lang.String getMinimumBackoffInput();
```

- *Type:* java.lang.String

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---


### PubsubSubscriptionTimeoutsOutputReference <a name="PubsubSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_subscription.PubsubSubscriptionTimeoutsOutputReference;

new PubsubSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PubsubSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

---



