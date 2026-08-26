# `vectorSearchDataObject` Submodule <a name="`vectorSearchDataObject` Submodule" id="@cdktn/provider-google.vectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchDataObject <a name="VectorSearchDataObject" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObject;

VectorSearchDataObject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataObjectId(java.lang.String)
    .location(java.lang.String)
//  .data(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(VectorSearchDataObjectTimeouts)
//  .vectors(IResolvable|java.util.List<VectorSearchDataObjectVectors>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dataObjectId">dataObjectId</a></code> | <code>java.lang.String</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.data">data</a></code> | <code>java.lang.String</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.vectors">vectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>></code> | vectors block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#collection_id VectorSearchDataObject#collection_id}

---

##### `dataObjectId`<sup>Required</sup> <a name="dataObjectId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dataObjectId"></a>

- *Type:* java.lang.String

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data_object_id VectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#location VectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.data"></a>

- *Type:* java.lang.String

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data VectorSearchDataObject#data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#deletion_policy VectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#etag VectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#timeouts VectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.vectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>>

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#vectors VectorSearchDataObject#vectors}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors">putVectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetVectors">resetVectors</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts"></a>

```java
public void putTimeouts(VectorSearchDataObjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---

##### `putVectors` <a name="putVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors"></a>

```java
public void putVectors(IResolvable|java.util.List<VectorSearchDataObjectVectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>>

---

##### `resetData` <a name="resetData" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetData"></a>

```java
public void resetData()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVectors` <a name="resetVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetVectors"></a>

```java
public void resetVectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObject;

VectorSearchDataObject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObject;

VectorSearchDataObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObject;

VectorSearchDataObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObject;

VectorSearchDataObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VectorSearchDataObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VectorSearchDataObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference">VectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectors">vectors</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList">VectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectIdInput">dataObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectorsInput">vectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectId">dataObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeouts"></a>

```java
public VectorSearchDataObjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference">VectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vectors`<sup>Required</sup> <a name="vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectors"></a>

```java
public VectorSearchDataObjectVectorsList getVectors();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList">VectorSearchDataObjectVectorsList</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `dataObjectIdInput`<sup>Optional</sup> <a name="dataObjectIdInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectIdInput"></a>

```java
public java.lang.String getDataObjectIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeoutsInput"></a>

```java
public IResolvable|VectorSearchDataObjectTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---

##### `vectorsInput`<sup>Optional</sup> <a name="vectorsInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectorsInput"></a>

```java
public IResolvable|java.util.List<VectorSearchDataObjectVectors> getVectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `dataObjectId`<sup>Required</sup> <a name="dataObjectId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectId"></a>

```java
public java.lang.String getDataObjectId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchDataObjectConfig <a name="VectorSearchDataObjectConfig" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectConfig;

VectorSearchDataObjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataObjectId(java.lang.String)
    .location(java.lang.String)
//  .data(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(VectorSearchDataObjectTimeouts)
//  .vectors(IResolvable|java.util.List<VectorSearchDataObjectVectors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dataObjectId">dataObjectId</a></code> | <code>java.lang.String</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.data">data</a></code> | <code>java.lang.String</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.vectors">vectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>></code> | vectors block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#collection_id VectorSearchDataObject#collection_id}

---

##### `dataObjectId`<sup>Required</sup> <a name="dataObjectId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dataObjectId"></a>

```java
public java.lang.String getDataObjectId();
```

- *Type:* java.lang.String

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data_object_id VectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#location VectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data VectorSearchDataObject#data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#deletion_policy VectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#etag VectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.timeouts"></a>

```java
public VectorSearchDataObjectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#timeouts VectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.vectors"></a>

```java
public IResolvable|java.util.List<VectorSearchDataObjectVectors> getVectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>>

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#vectors VectorSearchDataObject#vectors}

---

### VectorSearchDataObjectTimeouts <a name="VectorSearchDataObjectTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectTimeouts;

VectorSearchDataObjectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}.

---

### VectorSearchDataObjectVectors <a name="VectorSearchDataObjectVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectors;

VectorSearchDataObjectVectors.builder()
    .fieldName(java.lang.String)
//  .dense(VectorSearchDataObjectVectorsDense)
//  .sparse(VectorSearchDataObjectVectorsSparse)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#field_name VectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#field_name VectorSearchDataObject#field_name}.

---

##### `dense`<sup>Optional</sup> <a name="dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.dense"></a>

```java
public VectorSearchDataObjectVectorsDense getDense();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#dense VectorSearchDataObject#dense}

---

##### `sparse`<sup>Optional</sup> <a name="sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.sparse"></a>

```java
public VectorSearchDataObjectVectorsSparse getSparse();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#sparse VectorSearchDataObject#sparse}

---

### VectorSearchDataObjectVectorsDense <a name="VectorSearchDataObjectVectorsDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectorsDense;

VectorSearchDataObjectVectorsDense.builder()
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | The float values of the dense vector. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

### VectorSearchDataObjectVectorsSparse <a name="VectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectorsSparse;

VectorSearchDataObjectVectorsSparse.builder()
    .indices(java.util.List<java.lang.Number>)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.indices">indices</a></code> | <code>java.util.List<java.lang.Number></code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | The non-zero float values of the sparse vector. |

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.indices"></a>

```java
public java.util.List<java.lang.Number> getIndices();
```

- *Type:* java.util.List<java.lang.Number>

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#indices VectorSearchDataObject#indices}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchDataObjectTimeoutsOutputReference <a name="VectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectTimeoutsOutputReference;

new VectorSearchDataObjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchDataObjectTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---


### VectorSearchDataObjectVectorsDenseOutputReference <a name="VectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectorsDenseOutputReference;

new VectorSearchDataObjectVectorsDenseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```java
public VectorSearchDataObjectVectorsDense getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---


### VectorSearchDataObjectVectorsList <a name="VectorSearchDataObjectVectorsList" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectorsList;

new VectorSearchDataObjectVectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get"></a>

```java
public VectorSearchDataObjectVectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VectorSearchDataObjectVectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>>

---


### VectorSearchDataObjectVectorsOutputReference <a name="VectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectorsOutputReference;

new VectorSearchDataObjectVectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense">putDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse">putSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetDense">resetDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetSparse">resetSparse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDense` <a name="putDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense"></a>

```java
public void putDense(VectorSearchDataObjectVectorsDense value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---

##### `putSparse` <a name="putSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```java
public void putSparse(VectorSearchDataObjectVectorsSparse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---

##### `resetDense` <a name="resetDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```java
public void resetDense()
```

##### `resetSparse` <a name="resetSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```java
public void resetSparse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference">VectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference">VectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.denseInput">denseInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparseInput">sparseInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dense`<sup>Required</sup> <a name="dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```java
public VectorSearchDataObjectVectorsDenseOutputReference getDense();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference">VectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `sparse`<sup>Required</sup> <a name="sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```java
public VectorSearchDataObjectVectorsSparseOutputReference getSparse();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference">VectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `denseInput`<sup>Optional</sup> <a name="denseInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```java
public VectorSearchDataObjectVectorsDense getDenseInput();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `sparseInput`<sup>Optional</sup> <a name="sparseInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```java
public VectorSearchDataObjectVectorsSparse getSparseInput();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchDataObjectVectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>

---


### VectorSearchDataObjectVectorsSparseOutputReference <a name="VectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vector_search_data_object.VectorSearchDataObjectVectorsSparseOutputReference;

new VectorSearchDataObjectVectorsSparseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">indicesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indices">indices</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indicesInput`<sup>Optional</sup> <a name="indicesInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```java
public java.util.List<java.lang.Number> getIndicesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```java
public java.util.List<java.lang.Number> getIndices();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```java
public VectorSearchDataObjectVectorsSparse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---



