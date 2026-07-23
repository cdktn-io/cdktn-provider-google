# `pubsubTopic` Submodule <a name="`pubsubTopic` Submodule" id="@cdktn/provider-google.pubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubTopic <a name="PubsubTopic" id="@cdktn/provider-google.pubsubTopic.PubsubTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopic;

PubsubTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .ingestionDataSourceSettings(PubsubTopicIngestionDataSourceSettings)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .messageRetentionDuration(java.lang.String)
//  .messageStoragePolicy(PubsubTopicMessageStoragePolicy)
//  .messageTransforms(IResolvable|java.util.List<PubsubTopicMessageTransforms>)
//  .project(java.lang.String)
//  .schemaSettings(PubsubTopicSchemaSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PubsubTopicTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#id PubsubTopic#id}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageTransforms">messageTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>></code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#project PubsubTopic#project}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#name PubsubTopic#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#deletion_policy PubsubTopic#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#id PubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionDataSourceSettings`<sup>Optional</sup> <a name="ingestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.ingestionDataSourceSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#labels PubsubTopic#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageRetentionDuration"></a>

- *Type:* java.lang.String

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}

---

##### `messageStoragePolicy`<sup>Optional</sup> <a name="messageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageStoragePolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageTransforms"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>>

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_transforms PubsubTopic#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#project PubsubTopic#project}.

---

##### `schemaSettings`<sup>Optional</sup> <a name="schemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.schemaSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

Resource manager tags to be bound to the topic. Tag keys and
values have the same definition as resource manager tags. Keys must be in
the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#tags PubsubTopic#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings">putIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy">putMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms">putMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings">putSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings">resetIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy">resetMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageTransforms">resetMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings">resetSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestionDataSourceSettings` <a name="putIngestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings"></a>

```java
public void putIngestionDataSourceSettings(PubsubTopicIngestionDataSourceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `putMessageStoragePolicy` <a name="putMessageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy"></a>

```java
public void putMessageStoragePolicy(PubsubTopicMessageStoragePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `putMessageTransforms` <a name="putMessageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms"></a>

```java
public void putMessageTransforms(IResolvable|java.util.List<PubsubTopicMessageTransforms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>>

---

##### `putSchemaSettings` <a name="putSchemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings"></a>

```java
public void putSchemaSettings(PubsubTopicSchemaSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putTimeouts"></a>

```java
public void putTimeouts(PubsubTopicTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetId"></a>

```java
public void resetId()
```

##### `resetIngestionDataSourceSettings` <a name="resetIngestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings"></a>

```java
public void resetIngestionDataSourceSettings()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration"></a>

```java
public void resetMessageRetentionDuration()
```

##### `resetMessageStoragePolicy` <a name="resetMessageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy"></a>

```java
public void resetMessageStoragePolicy()
```

##### `resetMessageTransforms` <a name="resetMessageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageTransforms"></a>

```java
public void resetMessageTransforms()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetProject"></a>

```java
public void resetProject()
```

##### `resetSchemaSettings` <a name="resetSchemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings"></a>

```java
public void resetSchemaSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PubsubTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isConstruct"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopic;

PubsubTopic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformElement"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopic;

PubsubTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformResource"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopic;

PubsubTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopic;

PubsubTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PubsubTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PubsubTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PubsubTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PubsubTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PubsubTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransforms">messageTransforms</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList">PubsubTopicMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput">ingestionDataSourceSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput">messageStoragePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransformsInput">messageTransformsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput">schemaSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `ingestionDataSourceSettings`<sup>Required</sup> <a name="ingestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings"></a>

```java
public PubsubTopicIngestionDataSourceSettingsOutputReference getIngestionDataSourceSettings();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a>

---

##### `messageStoragePolicy`<sup>Required</sup> <a name="messageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy"></a>

```java
public PubsubTopicMessageStoragePolicyOutputReference getMessageStoragePolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a>

---

##### `messageTransforms`<sup>Required</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransforms"></a>

```java
public PubsubTopicMessageTransformsList getMessageTransforms();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList">PubsubTopicMessageTransformsList</a>

---

##### `schemaSettings`<sup>Required</sup> <a name="schemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings"></a>

```java
public PubsubTopicSchemaSettingsOutputReference getSchemaSettings();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeouts"></a>

```java
public PubsubTopicTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingestionDataSourceSettingsInput`<sup>Optional</sup> <a name="ingestionDataSourceSettingsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput"></a>

```java
public PubsubTopicIngestionDataSourceSettings getIngestionDataSourceSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput"></a>

```java
public java.lang.String getMessageRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `messageStoragePolicyInput`<sup>Optional</sup> <a name="messageStoragePolicyInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput"></a>

```java
public PubsubTopicMessageStoragePolicy getMessageStoragePolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `messageTransformsInput`<sup>Optional</sup> <a name="messageTransformsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransformsInput"></a>

```java
public IResolvable|java.util.List<PubsubTopicMessageTransforms> getMessageTransformsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `schemaSettingsInput`<sup>Optional</sup> <a name="schemaSettingsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput"></a>

```java
public PubsubTopicSchemaSettings getSchemaSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput"></a>

```java
public IResolvable|PubsubTopicTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubTopicConfig <a name="PubsubTopicConfig" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicConfig;

PubsubTopicConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .ingestionDataSourceSettings(PubsubTopicIngestionDataSourceSettings)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .messageRetentionDuration(java.lang.String)
//  .messageStoragePolicy(PubsubTopicMessageStoragePolicy)
//  .messageTransforms(IResolvable|java.util.List<PubsubTopicMessageTransforms>)
//  .project(java.lang.String)
//  .schemaSettings(PubsubTopicSchemaSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PubsubTopicTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#id PubsubTopic#id}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageTransforms">messageTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>></code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#project PubsubTopic#project}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#name PubsubTopic#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#deletion_policy PubsubTopic#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#id PubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionDataSourceSettings`<sup>Optional</sup> <a name="ingestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings"></a>

```java
public PubsubTopicIngestionDataSourceSettings getIngestionDataSourceSettings();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#labels PubsubTopic#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}

---

##### `messageStoragePolicy`<sup>Optional</sup> <a name="messageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy"></a>

```java
public PubsubTopicMessageStoragePolicy getMessageStoragePolicy();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageTransforms"></a>

```java
public IResolvable|java.util.List<PubsubTopicMessageTransforms> getMessageTransforms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>>

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_transforms PubsubTopic#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#project PubsubTopic#project}.

---

##### `schemaSettings`<sup>Optional</sup> <a name="schemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings"></a>

```java
public PubsubTopicSchemaSettings getSchemaSettings();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

Resource manager tags to be bound to the topic. Tag keys and
values have the same definition as resource manager tags. Keys must be in
the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#tags PubsubTopic#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts"></a>

```java
public PubsubTopicTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}

---

### PubsubTopicIngestionDataSourceSettings <a name="PubsubTopicIngestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettings;

PubsubTopicIngestionDataSourceSettings.builder()
//  .awsKinesis(PubsubTopicIngestionDataSourceSettingsAwsKinesis)
//  .awsMsk(PubsubTopicIngestionDataSourceSettingsAwsMsk)
//  .azureEventHubs(PubsubTopicIngestionDataSourceSettingsAzureEventHubs)
//  .cloudStorage(PubsubTopicIngestionDataSourceSettingsCloudStorage)
//  .confluentCloud(PubsubTopicIngestionDataSourceSettingsConfluentCloud)
//  .platformLogsSettings(PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | aws_kinesis block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk">awsMsk</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | aws_msk block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs">azureEventHubs</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | azure_event_hubs block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | cloud_storage block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud">confluentCloud</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | confluent_cloud block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | platform_logs_settings block. |

---

##### `awsKinesis`<sup>Optional</sup> <a name="awsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsKinesis getAwsKinesis();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

aws_kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_kinesis PubsubTopic#aws_kinesis}

---

##### `awsMsk`<sup>Optional</sup> <a name="awsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsMsk getAwsMsk();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

aws_msk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_msk PubsubTopic#aws_msk}

---

##### `azureEventHubs`<sup>Optional</sup> <a name="azureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAzureEventHubs getAzureEventHubs();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

azure_event_hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#azure_event_hubs PubsubTopic#azure_event_hubs}

---

##### `cloudStorage`<sup>Optional</sup> <a name="cloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorage getCloudStorage();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#cloud_storage PubsubTopic#cloud_storage}

---

##### `confluentCloud`<sup>Optional</sup> <a name="confluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud"></a>

```java
public PubsubTopicIngestionDataSourceSettingsConfluentCloud getConfluentCloud();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

confluent_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#confluent_cloud PubsubTopic#confluent_cloud}

---

##### `platformLogsSettings`<sup>Optional</sup> <a name="platformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings"></a>

```java
public PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings getPlatformLogsSettings();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

platform_logs_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#platform_logs_settings PubsubTopic#platform_logs_settings}

---

### PubsubTopicIngestionDataSourceSettingsAwsKinesis <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsAwsKinesis;

PubsubTopicIngestionDataSourceSettingsAwsKinesis.builder()
    .awsRoleArn(java.lang.String)
    .consumerArn(java.lang.String)
    .gcpServiceAccount(java.lang.String)
    .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | AWS role ARN to be used for Federated Identity authentication with Kinesis. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | The Kinesis stream ARN to ingest data from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

AWS role ARN to be used for Federated Identity authentication with Kinesis.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn"></a>

```java
public java.lang.String getConsumerArn();
```

- *Type:* java.lang.String

The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode.

The consumer must be already
created and ready to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#consumer_arn PubsubTopic#consumer_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

The Kinesis stream ARN to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#stream_arn PubsubTopic#stream_arn}

---

### PubsubTopicIngestionDataSourceSettingsAwsMsk <a name="PubsubTopicIngestionDataSourceSettingsAwsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsAwsMsk;

PubsubTopicIngestionDataSourceSettingsAwsMsk.builder()
    .awsRoleArn(java.lang.String)
    .clusterArn(java.lang.String)
    .gcpServiceAccount(java.lang.String)
    .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | AWS role ARN to be used for Federated Identity authentication with MSK. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | ARN that uniquely identifies the MSK cluster. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic">topic</a></code> | <code>java.lang.String</code> | The name of the MSK topic that Pub/Sub will import from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

AWS role ARN to be used for Federated Identity authentication with MSK.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

ARN that uniquely identifies the MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#cluster_arn PubsubTopic#cluster_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

The name of the MSK topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

### PubsubTopicIngestionDataSourceSettingsAzureEventHubs <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs;

PubsubTopicIngestionDataSourceSettingsAzureEventHubs.builder()
//  .clientId(java.lang.String)
//  .eventHub(java.lang.String)
//  .gcpServiceAccount(java.lang.String)
//  .namespace(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The Azure event hub client ID to use for ingestion. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub">eventHub</a></code> | <code>java.lang.String</code> | The Azure event hub to ingest data from. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The Azure event hub namespace to ingest data from. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | The name of the resource group within an Azure subscription. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Azure event hub subscription ID to use for ingestion. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Azure event hub tenant ID to use for ingestion. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The Azure event hub client ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#client_id PubsubTopic#client_id}

---

##### `eventHub`<sup>Optional</sup> <a name="eventHub" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub"></a>

```java
public java.lang.String getEventHub();
```

- *Type:* java.lang.String

The Azure event hub to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#event_hub PubsubTopic#event_hub}

---

##### `gcpServiceAccount`<sup>Optional</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The Azure event hub namespace to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#namespace PubsubTopic#namespace}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

The name of the resource group within an Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#resource_group PubsubTopic#resource_group}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The Azure event hub subscription ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#subscription_id PubsubTopic#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Azure event hub tenant ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#tenant_id PubsubTopic#tenant_id}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorage <a name="PubsubTopicIngestionDataSourceSettingsCloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStorage;

PubsubTopicIngestionDataSourceSettingsCloudStorage.builder()
    .bucket(java.lang.String)
//  .avroFormat(PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat)
//  .matchGlob(java.lang.String)
//  .minimumObjectCreateTime(java.lang.String)
//  .pubsubAvroFormat(PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat)
//  .textFormat(PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | avro_format block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob">matchGlob</a></code> | <code>java.lang.String</code> | Glob pattern used to match objects that will be ingested. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>java.lang.String</code> | The timestamp set in RFC3339 text format. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | pubsub_avro_format block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat">textFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | text_format block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#bucket PubsubTopic#bucket}

---

##### `avroFormat`<sup>Optional</sup> <a name="avroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat getAvroFormat();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#avro_format PubsubTopic#avro_format}

---

##### `matchGlob`<sup>Optional</sup> <a name="matchGlob" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob"></a>

```java
public java.lang.String getMatchGlob();
```

- *Type:* java.lang.String

Glob pattern used to match objects that will be ingested.

If unset, all
objects will be ingested. See the supported patterns:
https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#match_glob PubsubTopic#match_glob}

---

##### `minimumObjectCreateTime`<sup>Optional</sup> <a name="minimumObjectCreateTime" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime"></a>

```java
public java.lang.String getMinimumObjectCreateTime();
```

- *Type:* java.lang.String

The timestamp set in RFC3339 text format.

If set, only objects with a
larger or equal timestamp will be ingested. Unset by default, meaning
all objects will be ingested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#minimum_object_create_time PubsubTopic#minimum_object_create_time}

---

##### `pubsubAvroFormat`<sup>Optional</sup> <a name="pubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat getPubsubAvroFormat();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

pubsub_avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#pubsub_avro_format PubsubTopic#pubsub_avro_format}

---

##### `textFormat`<sup>Optional</sup> <a name="textFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat getTextFormat();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

text_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#text_format PubsubTopic#text_format}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;

PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.builder()
    .build();
```


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;

PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.builder()
    .build();
```


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;

PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.builder()
//  .delimiter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | The delimiter to use when using the 'text' format. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

The delimiter to use when using the 'text' format.

Each line of text as
specified by the delimiter will be set to the 'data' field of a Pub/Sub
message. When unset, '\n' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#delimiter PubsubTopic#delimiter}

---

### PubsubTopicIngestionDataSourceSettingsConfluentCloud <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsConfluentCloud;

PubsubTopicIngestionDataSourceSettingsConfluentCloud.builder()
    .bootstrapServer(java.lang.String)
    .gcpServiceAccount(java.lang.String)
    .identityPoolId(java.lang.String)
    .topic(java.lang.String)
//  .clusterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer">bootstrapServer</a></code> | <code>java.lang.String</code> | The Confluent Cloud bootstrap server. The format is url:port. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | The GCP service account to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Identity pool ID to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic">topic</a></code> | <code>java.lang.String</code> | Name of the Confluent Cloud topic that Pub/Sub will import from. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The Confluent Cloud cluster ID. |

---

##### `bootstrapServer`<sup>Required</sup> <a name="bootstrapServer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer"></a>

```java
public java.lang.String getBootstrapServer();
```

- *Type:* java.lang.String

The Confluent Cloud bootstrap server. The format is url:port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#bootstrap_server PubsubTopic#bootstrap_server}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

The GCP service account to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Identity pool ID to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#identity_pool_id PubsubTopic#identity_pool_id}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Name of the Confluent Cloud topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The Confluent Cloud cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#cluster_id PubsubTopic#cluster_id}

---

### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;

PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.builder()
//  .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity">severity</a></code> | <code>java.lang.String</code> | The minimum severity level of Platform Logs that will be written. |

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The minimum severity level of Platform Logs that will be written.

If unspecified,
no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#severity PubsubTopic#severity}

---

### PubsubTopicMessageStoragePolicy <a name="PubsubTopicMessageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageStoragePolicy;

PubsubTopicMessageStoragePolicy.builder()
    .allowedPersistenceRegions(java.util.List<java.lang.String>)
//  .enforceInTransit(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit">enforceInTransit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages. |

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedPersistenceRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage.

Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#allowed_persistence_regions PubsubTopic#allowed_persistence_regions}

---

##### `enforceInTransit`<sup>Optional</sup> <a name="enforceInTransit" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit"></a>

```java
public java.lang.Boolean|IResolvable getEnforceInTransit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages.

That is, Pub/Sub will fail topics.publish
operations on this topic and subscribe operations on any subscription
attached to this topic in any region that is not in 'allowedPersistenceRegions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#enforce_in_transit PubsubTopic#enforce_in_transit}

---

### PubsubTopicMessageTransforms <a name="PubsubTopicMessageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransforms;

PubsubTopicMessageTransforms.builder()
//  .aiInference(PubsubTopicMessageTransformsAiInference)
//  .disabled(java.lang.Boolean|IResolvable)
//  .javascriptUdf(PubsubTopicMessageTransformsJavascriptUdf)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a></code> | ai_inference block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether or not to use this transform. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | javascript_udf block. |

---

##### `aiInference`<sup>Optional</sup> <a name="aiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.aiInference"></a>

```java
public PubsubTopicMessageTransformsAiInference getAiInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

ai_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#ai_inference PubsubTopic#ai_inference}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether or not to use this transform.

If not set or 'false',
the transform will be applied to messages. Default: 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#disabled PubsubTopic#disabled}

---

##### `javascriptUdf`<sup>Optional</sup> <a name="javascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.javascriptUdf"></a>

```java
public PubsubTopicMessageTransformsJavascriptUdf getJavascriptUdf();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

javascript_udf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#javascript_udf PubsubTopic#javascript_udf}

---

### PubsubTopicMessageTransformsAiInference <a name="PubsubTopicMessageTransformsAiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsAiInference;

PubsubTopicMessageTransformsAiInference.builder()
    .endpoint(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .unstructuredInference(PubsubTopicMessageTransformsAiInferenceUnstructuredInference)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to make prediction requests against endpoints. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a></code> | unstructured_inference block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'.

Vertex AI API requests will be sent to this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#endpoint PubsubTopic#endpoint}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to make prediction requests against endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#service_account_email PubsubTopic#service_account_email}

---

##### `unstructuredInference`<sup>Optional</sup> <a name="unstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.unstructuredInference"></a>

```java
public PubsubTopicMessageTransformsAiInferenceUnstructuredInference getUnstructuredInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

unstructured_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#unstructured_inference PubsubTopic#unstructured_inference}

---

### PubsubTopicMessageTransformsAiInferenceUnstructuredInference <a name="PubsubTopicMessageTransformsAiInferenceUnstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference;

PubsubTopicMessageTransformsAiInferenceUnstructuredInference.builder()
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A parameters object to be included in each inference request. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A parameters object to be included in each inference request.

The parameters object is combined with the data field of the Pub/Sub
message to form the inference request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#parameters PubsubTopic#parameters}

---

### PubsubTopicMessageTransformsJavascriptUdf <a name="PubsubTopicMessageTransformsJavascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsJavascriptUdf;

PubsubTopicMessageTransformsJavascriptUdf.builder()
    .code(java.lang.String)
    .functionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.code">code</a></code> | <code>java.lang.String</code> | JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Name of the JavaScript function that should be applied to Pub/Sub messages. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message.

* *

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Name of the JavaScript function that should be applied to Pub/Sub messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#function_name PubsubTopic#function_name}

---

### PubsubTopicSchemaSettings <a name="PubsubTopicSchemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicSchemaSettings;

PubsubTopicSchemaSettings.builder()
    .schema(java.lang.String)
//  .encoding(java.lang.String)
//  .firstRevisionId(java.lang.String)
//  .lastRevisionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema">schema</a></code> | <code>java.lang.String</code> | The name of the schema that messages published should be validated against. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding">encoding</a></code> | <code>java.lang.String</code> | The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.firstRevisionId">firstRevisionId</a></code> | <code>java.lang.String</code> | The minimum (inclusive) revision allowed for validating messages. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.lastRevisionId">lastRevisionId</a></code> | <code>java.lang.String</code> | The maximum (inclusive) revision allowed for validating messages. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The name of the schema that messages published should be validated against.

Format is projects/{project}/schemas/{schema}.
The value of this field will be *deleted-schema*
if the schema has been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#schema PubsubTopic#schema}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#encoding PubsubTopic#encoding}

---

##### `firstRevisionId`<sup>Optional</sup> <a name="firstRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.firstRevisionId"></a>

```java
public java.lang.String getFirstRevisionId();
```

- *Type:* java.lang.String

The minimum (inclusive) revision allowed for validating messages.

If empty or not present, allow any revision to be validated against last_revision or any revision created before.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#first_revision_id PubsubTopic#first_revision_id}

---

##### `lastRevisionId`<sup>Optional</sup> <a name="lastRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.lastRevisionId"></a>

```java
public java.lang.String getLastRevisionId();
```

- *Type:* java.lang.String

The maximum (inclusive) revision allowed for validating messages.

If empty or not present, allow any revision to be validated against first_revision or any revision created after.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#last_revision_id PubsubTopic#last_revision_id}

---

### PubsubTopicTimeouts <a name="PubsubTopicTimeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicTimeouts;

PubsubTopicTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#create PubsubTopic#create}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#update PubsubTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#create PubsubTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#update PubsubTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference;

new PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput">consumerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput"></a>

```java
public java.lang.String getAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput"></a>

```java
public java.lang.String getConsumerArnInput();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput"></a>

```java
public java.lang.String getGcpServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn"></a>

```java
public java.lang.String getConsumerArn();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsKinesis getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---


### PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference;

new PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput"></a>

```java
public java.lang.String getAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput"></a>

```java
public java.lang.String getGcpServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsMsk getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---


### PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference;

new PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub">resetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount">resetGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetEventHub` <a name="resetEventHub" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub"></a>

```java
public void resetEventHub()
```

##### `resetGcpServiceAccount` <a name="resetGcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount"></a>

```java
public void resetGcpServiceAccount()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput">eventHubInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub">eventHub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `eventHubInput`<sup>Optional</sup> <a name="eventHubInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput"></a>

```java
public java.lang.String getEventHubInput();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput"></a>

```java
public java.lang.String getGcpServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `eventHub`<sup>Required</sup> <a name="eventHub" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub"></a>

```java
public java.lang.String getEventHub();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAzureEventHubs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference;

new PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference;

new PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat">putAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat">putPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat">putTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat">resetAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob">resetMatchGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime">resetMinimumObjectCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat">resetPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat">resetTextFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroFormat` <a name="putAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat"></a>

```java
public void putAvroFormat(PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `putPubsubAvroFormat` <a name="putPubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat"></a>

```java
public void putPubsubAvroFormat(PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `putTextFormat` <a name="putTextFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat"></a>

```java
public void putTextFormat(PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `resetAvroFormat` <a name="resetAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat"></a>

```java
public void resetAvroFormat()
```

##### `resetMatchGlob` <a name="resetMatchGlob" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob"></a>

```java
public void resetMatchGlob()
```

##### `resetMinimumObjectCreateTime` <a name="resetMinimumObjectCreateTime" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime"></a>

```java
public void resetMinimumObjectCreateTime()
```

##### `resetPubsubAvroFormat` <a name="resetPubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat"></a>

```java
public void resetPubsubAvroFormat()
```

##### `resetTextFormat` <a name="resetTextFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat"></a>

```java
public void resetTextFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat">textFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput">avroFormatInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput">matchGlobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput">minimumObjectCreateTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput">pubsubAvroFormatInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput">textFormatInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob">matchGlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avroFormat`<sup>Required</sup> <a name="avroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference getAvroFormat();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a>

---

##### `pubsubAvroFormat`<sup>Required</sup> <a name="pubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference getPubsubAvroFormat();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a>

---

##### `textFormat`<sup>Required</sup> <a name="textFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference getTextFormat();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a>

---

##### `avroFormatInput`<sup>Optional</sup> <a name="avroFormatInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat getAvroFormatInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `matchGlobInput`<sup>Optional</sup> <a name="matchGlobInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput"></a>

```java
public java.lang.String getMatchGlobInput();
```

- *Type:* java.lang.String

---

##### `minimumObjectCreateTimeInput`<sup>Optional</sup> <a name="minimumObjectCreateTimeInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput"></a>

```java
public java.lang.String getMinimumObjectCreateTimeInput();
```

- *Type:* java.lang.String

---

##### `pubsubAvroFormatInput`<sup>Optional</sup> <a name="pubsubAvroFormatInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat getPubsubAvroFormatInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `textFormatInput`<sup>Optional</sup> <a name="textFormatInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat getTextFormatInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `matchGlob`<sup>Required</sup> <a name="matchGlob" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob"></a>

```java
public java.lang.String getMatchGlob();
```

- *Type:* java.lang.String

---

##### `minimumObjectCreateTime`<sup>Required</sup> <a name="minimumObjectCreateTime" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime"></a>

```java
public java.lang.String getMinimumObjectCreateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference;

new PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference;

new PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference;

new PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterId` <a name="resetClusterId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId"></a>

```java
public void resetClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput">bootstrapServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer">bootstrapServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootstrapServerInput`<sup>Optional</sup> <a name="bootstrapServerInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput"></a>

```java
public java.lang.String getBootstrapServerInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput"></a>

```java
public java.lang.String getGcpServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `bootstrapServer`<sup>Required</sup> <a name="bootstrapServer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer"></a>

```java
public java.lang.String getBootstrapServer();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount"></a>

```java
public java.lang.String getGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsConfluentCloud getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---


### PubsubTopicIngestionDataSourceSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsOutputReference;

new PubsubTopicIngestionDataSourceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis">putAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk">putAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs">putAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage">putCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud">putConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings">putPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis">resetAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk">resetAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs">resetAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage">resetCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud">resetConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings">resetPlatformLogsSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsKinesis` <a name="putAwsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis"></a>

```java
public void putAwsKinesis(PubsubTopicIngestionDataSourceSettingsAwsKinesis value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `putAwsMsk` <a name="putAwsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk"></a>

```java
public void putAwsMsk(PubsubTopicIngestionDataSourceSettingsAwsMsk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `putAzureEventHubs` <a name="putAzureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs"></a>

```java
public void putAzureEventHubs(PubsubTopicIngestionDataSourceSettingsAzureEventHubs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `putCloudStorage` <a name="putCloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage"></a>

```java
public void putCloudStorage(PubsubTopicIngestionDataSourceSettingsCloudStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `putConfluentCloud` <a name="putConfluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud"></a>

```java
public void putConfluentCloud(PubsubTopicIngestionDataSourceSettingsConfluentCloud value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `putPlatformLogsSettings` <a name="putPlatformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings"></a>

```java
public void putPlatformLogsSettings(PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `resetAwsKinesis` <a name="resetAwsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis"></a>

```java
public void resetAwsKinesis()
```

##### `resetAwsMsk` <a name="resetAwsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk"></a>

```java
public void resetAwsMsk()
```

##### `resetAzureEventHubs` <a name="resetAzureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs"></a>

```java
public void resetAzureEventHubs()
```

##### `resetCloudStorage` <a name="resetCloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage"></a>

```java
public void resetCloudStorage()
```

##### `resetConfluentCloud` <a name="resetConfluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud"></a>

```java
public void resetConfluentCloud()
```

##### `resetPlatformLogsSettings` <a name="resetPlatformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings"></a>

```java
public void resetPlatformLogsSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk">awsMsk</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs">azureEventHubs</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud">confluentCloud</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput">awsKinesisInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput">awsMskInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput">azureEventHubsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput">cloudStorageInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput">confluentCloudInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput">platformLogsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsKinesis`<sup>Required</sup> <a name="awsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference getAwsKinesis();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a>

---

##### `awsMsk`<sup>Required</sup> <a name="awsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference getAwsMsk();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a>

---

##### `azureEventHubs`<sup>Required</sup> <a name="azureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference getAzureEventHubs();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a>

---

##### `cloudStorage`<sup>Required</sup> <a name="cloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference getCloudStorage();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a>

---

##### `confluentCloud`<sup>Required</sup> <a name="confluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud"></a>

```java
public PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference getConfluentCloud();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a>

---

##### `platformLogsSettings`<sup>Required</sup> <a name="platformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings"></a>

```java
public PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference getPlatformLogsSettings();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a>

---

##### `awsKinesisInput`<sup>Optional</sup> <a name="awsKinesisInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsKinesis getAwsKinesisInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `awsMskInput`<sup>Optional</sup> <a name="awsMskInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAwsMsk getAwsMskInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `azureEventHubsInput`<sup>Optional</sup> <a name="azureEventHubsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsAzureEventHubs getAzureEventHubsInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `cloudStorageInput`<sup>Optional</sup> <a name="cloudStorageInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsCloudStorage getCloudStorageInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `confluentCloudInput`<sup>Optional</sup> <a name="confluentCloudInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsConfluentCloud getConfluentCloudInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `platformLogsSettingsInput`<sup>Optional</sup> <a name="platformLogsSettingsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput"></a>

```java
public PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings getPlatformLogsSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---


### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference;

new PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSeverity` <a name="resetSeverity" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue"></a>

```java
public PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---


### PubsubTopicMessageStoragePolicyOutputReference <a name="PubsubTopicMessageStoragePolicyOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageStoragePolicyOutputReference;

new PubsubTopicMessageStoragePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit">resetEnforceInTransit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceInTransit` <a name="resetEnforceInTransit" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit"></a>

```java
public void resetEnforceInTransit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput">allowedPersistenceRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput">enforceInTransitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit">enforceInTransit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedPersistenceRegionsInput`<sup>Optional</sup> <a name="allowedPersistenceRegionsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPersistenceRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enforceInTransitInput`<sup>Optional</sup> <a name="enforceInTransitInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceInTransitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedPersistenceRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enforceInTransit`<sup>Required</sup> <a name="enforceInTransit" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit"></a>

```java
public java.lang.Boolean|IResolvable getEnforceInTransit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```java
public PubsubTopicMessageStoragePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---


### PubsubTopicMessageTransformsAiInferenceOutputReference <a name="PubsubTopicMessageTransformsAiInferenceOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsAiInferenceOutputReference;

new PubsubTopicMessageTransformsAiInferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.putUnstructuredInference">putUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetUnstructuredInference">resetUnstructuredInference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnstructuredInference` <a name="putUnstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.putUnstructuredInference"></a>

```java
public void putUnstructuredInference(PubsubTopicMessageTransformsAiInferenceUnstructuredInference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.putUnstructuredInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetUnstructuredInference` <a name="resetUnstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetUnstructuredInference"></a>

```java
public void resetUnstructuredInference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput">unstructuredInferenceInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unstructuredInference`<sup>Required</sup> <a name="unstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInference"></a>

```java
public PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference getUnstructuredInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInferenceInput`<sup>Optional</sup> <a name="unstructuredInferenceInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput"></a>

```java
public PubsubTopicMessageTransformsAiInferenceUnstructuredInference getUnstructuredInferenceInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.internalValue"></a>

```java
public PubsubTopicMessageTransformsAiInference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

---


### PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference <a name="PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference;

new PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue"></a>

```java
public PubsubTopicMessageTransformsAiInferenceUnstructuredInference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

---


### PubsubTopicMessageTransformsJavascriptUdfOutputReference <a name="PubsubTopicMessageTransformsJavascriptUdfOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsJavascriptUdfOutputReference;

new PubsubTopicMessageTransformsJavascriptUdfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```java
public PubsubTopicMessageTransformsJavascriptUdf getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---


### PubsubTopicMessageTransformsList <a name="PubsubTopicMessageTransformsList" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsList;

new PubsubTopicMessageTransformsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get"></a>

```java
public PubsubTopicMessageTransformsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PubsubTopicMessageTransforms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>>

---


### PubsubTopicMessageTransformsOutputReference <a name="PubsubTopicMessageTransformsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicMessageTransformsOutputReference;

new PubsubTopicMessageTransformsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putAiInference">putAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf">putJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetAiInference">resetAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetJavascriptUdf">resetJavascriptUdf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAiInference` <a name="putAiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putAiInference"></a>

```java
public void putAiInference(PubsubTopicMessageTransformsAiInference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putAiInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

---

##### `putJavascriptUdf` <a name="putJavascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf"></a>

```java
public void putJavascriptUdf(PubsubTopicMessageTransformsJavascriptUdf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---

##### `resetAiInference` <a name="resetAiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetAiInference"></a>

```java
public void resetAiInference()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetJavascriptUdf` <a name="resetJavascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetJavascriptUdf"></a>

```java
public void resetJavascriptUdf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference">PubsubTopicMessageTransformsJavascriptUdfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInferenceInput">aiInferenceInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdfInput">javascriptUdfInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiInference`<sup>Required</sup> <a name="aiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInference"></a>

```java
public PubsubTopicMessageTransformsAiInferenceOutputReference getAiInference();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceOutputReference</a>

---

##### `javascriptUdf`<sup>Required</sup> <a name="javascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdf"></a>

```java
public PubsubTopicMessageTransformsJavascriptUdfOutputReference getJavascriptUdf();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference">PubsubTopicMessageTransformsJavascriptUdfOutputReference</a>

---

##### `aiInferenceInput`<sup>Optional</sup> <a name="aiInferenceInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInferenceInput"></a>

```java
public PubsubTopicMessageTransformsAiInference getAiInferenceInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `javascriptUdfInput`<sup>Optional</sup> <a name="javascriptUdfInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdfInput"></a>

```java
public PubsubTopicMessageTransformsJavascriptUdf getJavascriptUdfInput();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.internalValue"></a>

```java
public IResolvable|PubsubTopicMessageTransforms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>

---


### PubsubTopicSchemaSettingsOutputReference <a name="PubsubTopicSchemaSettingsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicSchemaSettingsOutputReference;

new PubsubTopicSchemaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetFirstRevisionId">resetFirstRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetLastRevisionId">resetLastRevisionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFirstRevisionId` <a name="resetFirstRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetFirstRevisionId"></a>

```java
public void resetFirstRevisionId()
```

##### `resetLastRevisionId` <a name="resetLastRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetLastRevisionId"></a>

```java
public void resetLastRevisionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionIdInput">firstRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionIdInput">lastRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionId">firstRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionId">lastRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `firstRevisionIdInput`<sup>Optional</sup> <a name="firstRevisionIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionIdInput"></a>

```java
public java.lang.String getFirstRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `lastRevisionIdInput`<sup>Optional</sup> <a name="lastRevisionIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionIdInput"></a>

```java
public java.lang.String getLastRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `firstRevisionId`<sup>Required</sup> <a name="firstRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionId"></a>

```java
public java.lang.String getFirstRevisionId();
```

- *Type:* java.lang.String

---

##### `lastRevisionId`<sup>Required</sup> <a name="lastRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionId"></a>

```java
public java.lang.String getLastRevisionId();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```java
public PubsubTopicSchemaSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---


### PubsubTopicTimeoutsOutputReference <a name="PubsubTopicTimeoutsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.pubsub_topic.PubsubTopicTimeoutsOutputReference;

new PubsubTopicTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PubsubTopicTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---



