# `vectorSearchCollection` Submodule <a name="`vectorSearchCollection` Submodule" id="@cdktn/provider-google.vectorSearchCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchCollection <a name="VectorSearchCollection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection google_vector_search_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollection;

VectorSearchCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .location(java.lang.String)
//  .dataSchema(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionSpec(VectorSearchCollectionEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(VectorSearchCollectionTimeouts)
//  .vectorSchema(IResolvable|java.util.List<VectorSearchCollectionVectorSchema>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dataSchema">dataSchema</a></code> | <code>java.lang.String</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.vectorSchema">vectorSchema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>></code> | vector_schema block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}

---

##### `dataSchema`<sup>Optional</sup> <a name="dataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dataSchema"></a>

- *Type:* java.lang.String

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}

---

##### `vectorSchema`<sup>Optional</sup> <a name="vectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.vectorSchema"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>>

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema">putVectorSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema">resetDataSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema">resetVectorSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VectorSearchCollectionEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts"></a>

```java
public void putTimeouts(VectorSearchCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `putVectorSchema` <a name="putVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema"></a>

```java
public void putVectorSchema(IResolvable|java.util.List<VectorSearchCollectionVectorSchema> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>>

---

##### `resetDataSchema` <a name="resetDataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema"></a>

```java
public void resetDataSchema()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVectorSchema` <a name="resetVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema"></a>

```java
public void resetVectorSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollection;

VectorSearchCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollection;

VectorSearchCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollection;

VectorSearchCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollection;

VectorSearchCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VectorSearchCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VectorSearchCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VectorSearchCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema">vectorSchema</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput">dataSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput">vectorSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema">dataSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec"></a>

```java
public VectorSearchCollectionEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts"></a>

```java
public VectorSearchCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vectorSchema`<sup>Required</sup> <a name="vectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema"></a>

```java
public VectorSearchCollectionVectorSchemaList getVectorSchema();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `dataSchemaInput`<sup>Optional</sup> <a name="dataSchemaInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput"></a>

```java
public java.lang.String getDataSchemaInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput"></a>

```java
public VectorSearchCollectionEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput"></a>

```java
public IResolvable|VectorSearchCollectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `vectorSchemaInput`<sup>Optional</sup> <a name="vectorSchemaInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput"></a>

```java
public IResolvable|java.util.List<VectorSearchCollectionVectorSchema> getVectorSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `dataSchema`<sup>Required</sup> <a name="dataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema"></a>

```java
public java.lang.String getDataSchema();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchCollectionConfig <a name="VectorSearchCollectionConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionConfig;

VectorSearchCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .location(java.lang.String)
//  .dataSchema(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionSpec(VectorSearchCollectionEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(VectorSearchCollectionTimeouts)
//  .vectorSchema(IResolvable|java.util.List<VectorSearchCollectionVectorSchema>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema">dataSchema</a></code> | <code>java.lang.String</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema">vectorSchema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>></code> | vector_schema block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}

---

##### `dataSchema`<sup>Optional</sup> <a name="dataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema"></a>

```java
public java.lang.String getDataSchema();
```

- *Type:* java.lang.String

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec"></a>

```java
public VectorSearchCollectionEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts"></a>

```java
public VectorSearchCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}

---

##### `vectorSchema`<sup>Optional</sup> <a name="vectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema"></a>

```java
public IResolvable|java.util.List<VectorSearchCollectionVectorSchema> getVectorSchema();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>>

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}

---

### VectorSearchCollectionEncryptionSpec <a name="VectorSearchCollectionEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionEncryptionSpec;

VectorSearchCollectionEncryptionSpec.builder()
    .cryptoKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#crypto_key_name VectorSearchCollection#crypto_key_name}

---

### VectorSearchCollectionTimeouts <a name="VectorSearchCollectionTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionTimeouts;

VectorSearchCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}.

---

### VectorSearchCollectionVectorSchema <a name="VectorSearchCollectionVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchema;

VectorSearchCollectionVectorSchema.builder()
    .fieldName(java.lang.String)
//  .denseVector(VectorSearchCollectionVectorSchemaDenseVector)
//  .sparseVector(VectorSearchCollectionVectorSchemaSparseVector)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector">denseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | dense_vector block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector">sparseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | sparse_vector block. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}.

---

##### `denseVector`<sup>Optional</sup> <a name="denseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVector getDenseVector();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

dense_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#dense_vector VectorSearchCollection#dense_vector}

---

##### `sparseVector`<sup>Optional</sup> <a name="sparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector"></a>

```java
public VectorSearchCollectionVectorSchemaSparseVector getSparseVector();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

sparse_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#sparse_vector VectorSearchCollection#sparse_vector}

---

### VectorSearchCollectionVectorSchemaDenseVector <a name="VectorSearchCollectionVectorSchemaDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaDenseVector;

VectorSearchCollectionVectorSchemaDenseVector.builder()
//  .dimensions(java.lang.Number)
//  .vertexEmbeddingConfig(VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions">dimensions</a></code> | <code>java.lang.Number</code> | Dimensionality of the vector field. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig">vertexEmbeddingConfig</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | vertex_embedding_config block. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions"></a>

```java
public java.lang.Number getDimensions();
```

- *Type:* java.lang.Number

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#dimensions VectorSearchCollection#dimensions}

---

##### `vertexEmbeddingConfig`<sup>Optional</sup> <a name="vertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig getVertexEmbeddingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#vertex_embedding_config VectorSearchCollection#vertex_embedding_config}

---

### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig;

VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.builder()
    .modelId(java.lang.String)
    .taskType(java.lang.String)
    .textTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate">textTemplate</a></code> | <code>java.lang.String</code> | Required: Text template for the input to the model. |

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#model_id VectorSearchCollection#model_id}

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#task_type VectorSearchCollection#task_type}

---

##### `textTemplate`<sup>Required</sup> <a name="textTemplate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate"></a>

```java
public java.lang.String getTextTemplate();
```

- *Type:* java.lang.String

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_collection#text_template VectorSearchCollection#text_template}

---

### VectorSearchCollectionVectorSchemaSparseVector <a name="VectorSearchCollectionVectorSchemaSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaSparseVector;

VectorSearchCollectionVectorSchemaSparseVector.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### VectorSearchCollectionEncryptionSpecOutputReference <a name="VectorSearchCollectionEncryptionSpecOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionEncryptionSpecOutputReference;

new VectorSearchCollectionEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput"></a>

```java
public java.lang.String getCryptoKeyNameInput();
```

- *Type:* java.lang.String

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VectorSearchCollectionEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---


### VectorSearchCollectionTimeoutsOutputReference <a name="VectorSearchCollectionTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionTimeoutsOutputReference;

new VectorSearchCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchCollectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference;

new VectorSearchCollectionVectorSchemaDenseVectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig">putVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig">resetVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVertexEmbeddingConfig` <a name="putVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig"></a>

```java
public void putVertexEmbeddingConfig(VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetVertexEmbeddingConfig` <a name="resetVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig"></a>

```java
public void resetVertexEmbeddingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig">vertexEmbeddingConfig</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput">vertexEmbeddingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions">dimensions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vertexEmbeddingConfig`<sup>Required</sup> <a name="vertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference getVertexEmbeddingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Number getDimensionsInput();
```

- *Type:* java.lang.Number

---

##### `vertexEmbeddingConfigInput`<sup>Optional</sup> <a name="vertexEmbeddingConfigInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig getVertexEmbeddingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions"></a>

```java
public java.lang.Number getDimensions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference;

new VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput">textTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate">textTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `textTemplateInput`<sup>Optional</sup> <a name="textTemplateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput"></a>

```java
public java.lang.String getTextTemplateInput();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `textTemplate`<sup>Required</sup> <a name="textTemplate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate"></a>

```java
public java.lang.String getTextTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---


### VectorSearchCollectionVectorSchemaList <a name="VectorSearchCollectionVectorSchemaList" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaList;

new VectorSearchCollectionVectorSchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get"></a>

```java
public VectorSearchCollectionVectorSchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VectorSearchCollectionVectorSchema> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>>

---


### VectorSearchCollectionVectorSchemaOutputReference <a name="VectorSearchCollectionVectorSchemaOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaOutputReference;

new VectorSearchCollectionVectorSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector">putDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector">putSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector">resetDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector">resetSparseVector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenseVector` <a name="putDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector"></a>

```java
public void putDenseVector(VectorSearchCollectionVectorSchemaDenseVector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `putSparseVector` <a name="putSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector"></a>

```java
public void putSparseVector(VectorSearchCollectionVectorSchemaSparseVector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `resetDenseVector` <a name="resetDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector"></a>

```java
public void resetDenseVector()
```

##### `resetSparseVector` <a name="resetSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector"></a>

```java
public void resetSparseVector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector">denseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector">sparseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput">denseVectorInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput">sparseVectorInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denseVector`<sup>Required</sup> <a name="denseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVectorOutputReference getDenseVector();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a>

---

##### `sparseVector`<sup>Required</sup> <a name="sparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector"></a>

```java
public VectorSearchCollectionVectorSchemaSparseVectorOutputReference getSparseVector();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a>

---

##### `denseVectorInput`<sup>Optional</sup> <a name="denseVectorInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput"></a>

```java
public VectorSearchCollectionVectorSchemaDenseVector getDenseVectorInput();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `sparseVectorInput`<sup>Optional</sup> <a name="sparseVectorInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput"></a>

```java
public VectorSearchCollectionVectorSchemaSparseVector getSparseVectorInput();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchCollectionVectorSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>

---


### VectorSearchCollectionVectorSchemaSparseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaSparseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_collection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference;

new VectorSearchCollectionVectorSchemaSparseVectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue"></a>

```java
public VectorSearchCollectionVectorSchemaSparseVector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---



