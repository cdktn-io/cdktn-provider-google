# `dataplexMetadataFeed` Submodule <a name="`dataplexMetadataFeed` Submodule" id="@cdktn/provider-google.dataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexMetadataFeed <a name="DataplexMetadataFeed" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeed;

DataplexMetadataFeed.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .metadataFeedId(java.lang.String)
    .scope(DataplexMetadataFeedScope)
//  .deletionPolicy(java.lang.String)
//  .filters(DataplexMetadataFeedFilters)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .timeouts(DataplexMetadataFeedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.metadataFeedId">metadataFeedId</a></code> | <code>java.lang.String</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.metadataFeedId"></a>

- *Type:* java.lang.String

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.pubsubTopic"></a>

- *Type:* java.lang.String

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters"></a>

```java
public void putFilters(DataplexMetadataFeedFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope"></a>

```java
public void putScope(DataplexMetadataFeedScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts"></a>

```java
public void putTimeouts(DataplexMetadataFeedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeed;

DataplexMetadataFeed.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeed;

DataplexMetadataFeed.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeed;

DataplexMetadataFeed.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeed;

DataplexMetadataFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexMetadataFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexMetadataFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput">metadataFeedIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId">metadataFeedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters"></a>

```java
public DataplexMetadataFeedFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope"></a>

```java
public DataplexMetadataFeedScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts"></a>

```java
public DataplexMetadataFeedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput"></a>

```java
public DataplexMetadataFeedFilters getFiltersInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataFeedIdInput`<sup>Optional</sup> <a name="metadataFeedIdInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput"></a>

```java
public java.lang.String getMetadataFeedIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput"></a>

```java
public DataplexMetadataFeedScope getScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput"></a>

```java
public IResolvable|DataplexMetadataFeedTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId"></a>

```java
public java.lang.String getMetadataFeedId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexMetadataFeedConfig <a name="DataplexMetadataFeedConfig" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedConfig;

DataplexMetadataFeedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .metadataFeedId(java.lang.String)
    .scope(DataplexMetadataFeedScope)
//  .deletionPolicy(java.lang.String)
//  .filters(DataplexMetadataFeedFilters)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .timeouts(DataplexMetadataFeedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId">metadataFeedId</a></code> | <code>java.lang.String</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId"></a>

```java
public java.lang.String getMetadataFeedId();
```

- *Type:* java.lang.String

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope"></a>

```java
public DataplexMetadataFeedScope getScope();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters"></a>

```java
public DataplexMetadataFeedFilters getFilters();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts"></a>

```java
public DataplexMetadataFeedTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

### DataplexMetadataFeedFilters <a name="DataplexMetadataFeedFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedFilters;

DataplexMetadataFeedFilters.builder()
//  .aspectTypes(java.util.List<java.lang.String>)
//  .changeTypes(java.util.List<java.lang.String>)
//  .entryTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes">aspectTypes</a></code> | <code>java.util.List<java.lang.String></code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes">changeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes">entryTypes</a></code> | <code>java.util.List<java.lang.String></code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `aspectTypes`<sup>Optional</sup> <a name="aspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes"></a>

```java
public java.util.List<java.lang.String> getAspectTypes();
```

- *Type:* java.util.List<java.lang.String>

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}

---

##### `changeTypes`<sup>Optional</sup> <a name="changeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes"></a>

```java
public java.util.List<java.lang.String> getChangeTypes();
```

- *Type:* java.util.List<java.lang.String>

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}

---

##### `entryTypes`<sup>Optional</sup> <a name="entryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes"></a>

```java
public java.util.List<java.lang.String> getEntryTypes();
```

- *Type:* java.util.List<java.lang.String>

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}

---

### DataplexMetadataFeedScope <a name="DataplexMetadataFeedScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedScope;

DataplexMetadataFeedScope.builder()
//  .entryGroups(java.util.List<java.lang.String>)
//  .organizationLevel(java.lang.Boolean|IResolvable)
//  .projects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups">entryGroups</a></code> | <code>java.util.List<java.lang.String></code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel">organizationLevel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | The projects whose entries you want to listen to. |

---

##### `entryGroups`<sup>Optional</sup> <a name="entryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups"></a>

```java
public java.util.List<java.lang.String> getEntryGroups();
```

- *Type:* java.util.List<java.lang.String>

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}

---

##### `organizationLevel`<sup>Optional</sup> <a name="organizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationLevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}

---

### DataplexMetadataFeedTimeouts <a name="DataplexMetadataFeedTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedTimeouts;

DataplexMetadataFeedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexMetadataFeedFiltersOutputReference <a name="DataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedFiltersOutputReference;

new DataplexMetadataFeedFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes">resetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes">resetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes">resetEntryTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectTypes` <a name="resetAspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```java
public void resetAspectTypes()
```

##### `resetChangeTypes` <a name="resetChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```java
public void resetChangeTypes()
```

##### `resetEntryTypes` <a name="resetEntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```java
public void resetEntryTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">aspectTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">changeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">entryTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes">aspectTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes">changeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes">entryTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectTypesInput`<sup>Optional</sup> <a name="aspectTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```java
public java.util.List<java.lang.String> getAspectTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `changeTypesInput`<sup>Optional</sup> <a name="changeTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```java
public java.util.List<java.lang.String> getChangeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryTypesInput`<sup>Optional</sup> <a name="entryTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```java
public java.util.List<java.lang.String> getEntryTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aspectTypes`<sup>Required</sup> <a name="aspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```java
public java.util.List<java.lang.String> getAspectTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `changeTypes`<sup>Required</sup> <a name="changeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```java
public java.util.List<java.lang.String> getChangeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryTypes`<sup>Required</sup> <a name="entryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```java
public java.util.List<java.lang.String> getEntryTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```java
public DataplexMetadataFeedFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---


### DataplexMetadataFeedScopeOutputReference <a name="DataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedScopeOutputReference;

new DataplexMetadataFeedScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups">resetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">resetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntryGroups` <a name="resetEntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```java
public void resetEntryGroups()
```

##### `resetOrganizationLevel` <a name="resetOrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```java
public void resetOrganizationLevel()
```

##### `resetProjects` <a name="resetProjects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```java
public void resetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">entryGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">organizationLevelInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput">projectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups">entryGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel">organizationLevel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entryGroupsInput`<sup>Optional</sup> <a name="entryGroupsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```java
public java.util.List<java.lang.String> getEntryGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationLevelInput`<sup>Optional</sup> <a name="organizationLevelInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationLevelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```java
public java.util.List<java.lang.String> getProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryGroups`<sup>Required</sup> <a name="entryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```java
public java.util.List<java.lang.String> getEntryGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationLevel`<sup>Required</sup> <a name="organizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationLevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```java
public DataplexMetadataFeedScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---


### DataplexMetadataFeedTimeoutsOutputReference <a name="DataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_metadata_feed.DataplexMetadataFeedTimeoutsOutputReference;

new DataplexMetadataFeedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexMetadataFeedTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---



