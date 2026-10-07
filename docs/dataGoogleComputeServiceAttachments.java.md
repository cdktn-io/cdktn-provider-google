# `dataGoogleComputeServiceAttachments` Submodule <a name="`dataGoogleComputeServiceAttachments` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachments <a name="DataGoogleComputeServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments google_compute_service_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachments;

DataGoogleComputeServiceAttachments.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachments;

DataGoogleComputeServiceAttachments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachments;

DataGoogleComputeServiceAttachments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachments;

DataGoogleComputeServiceAttachments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachments;

DataGoogleComputeServiceAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeServiceAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeServiceAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeServiceAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments">serviceAttachments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `serviceAttachments`<sup>Required</sup> <a name="serviceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsList getServiceAttachments();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentsConfig <a name="DataGoogleComputeServiceAttachmentsConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsConfig;

DataGoogleComputeServiceAttachmentsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

### DataGoogleComputeServiceAttachmentsServiceAttachments <a name="DataGoogleComputeServiceAttachmentsServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachments;

DataGoogleComputeServiceAttachmentsServiceAttachments.builder()
    .build();
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints;

DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints.builder()
    .build();
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists;

DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists.builder()
    .build();
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId;

DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagatedConnectionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `propagatedConnectionCount`<sup>Required</sup> <a name="propagatedConnectionCount" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```java
public java.lang.Number getPropagatedConnectionCount();
```

- *Type:* java.lang.Number

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum">projectIdOrNum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `projectIdOrNum`<sup>Required</sup> <a name="projectIdOrNum" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```java
public java.lang.String getProjectIdOrNum();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints">connectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint">natIpsPerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId">pscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections">reconcileConnections</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps">showNatIps</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService">targetService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectedEndpoints`<sup>Required</sup> <a name="connectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList getConnectedEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference"></a>

```java
public java.lang.String getConnectionPreference();
```

- *Type:* java.lang.String

---

##### `consumerAcceptLists`<sup>Required</sup> <a name="consumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList getConsumerAcceptLists();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a>

---

##### `consumerRejectLists`<sup>Required</sup> <a name="consumerRejectLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol"></a>

```java
public IResolvable getEnableProxyProtocol();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `natIpsPerEndpoint`<sup>Required</sup> <a name="natIpsPerEndpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint"></a>

```java
public java.lang.Number getNatIpsPerEndpoint();
```

- *Type:* java.lang.Number

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets"></a>

```java
public java.util.List<java.lang.String> getNatSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `propagatedConnectionLimit`<sup>Required</sup> <a name="propagatedConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit"></a>

```java
public java.lang.Number getPropagatedConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `pscServiceAttachmentId`<sup>Required</sup> <a name="pscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList getPscServiceAttachmentId();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a>

---

##### `reconcileConnections`<sup>Required</sup> <a name="reconcileConnections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections"></a>

```java
public IResolvable getReconcileConnections();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero"></a>

```java
public IResolvable getSendPropagatedConnectionLimitIfZero();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `showNatIps`<sup>Required</sup> <a name="showNatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps"></a>

```java
public IResolvable getShowNatIps();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachments getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a>

---



