# `dataGoogleArtifactRegistryFile` Submodule <a name="`dataGoogleArtifactRegistryFile` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryFile <a name="DataGoogleArtifactRegistryFile" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file google_artifact_registry_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFile;

DataGoogleArtifactRegistryFile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fileId(java.lang.String)
    .location(java.lang.String)
    .outputPath(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .overwrite(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(DataGoogleArtifactRegistryFileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.fileId">fileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.outputPath">outputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.fileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}.

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.outputPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.overwrite"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#timeouts DataGoogleArtifactRegistryFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverwrite">resetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts"></a>

```java
public void putTimeouts(DataGoogleArtifactRegistryFileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetId"></a>

```java
public void resetId()
```

##### `resetOverwrite` <a name="resetOverwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverwrite"></a>

```java
public void resetOverwrite()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFile;

DataGoogleArtifactRegistryFile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFile;

DataGoogleArtifactRegistryFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFile;

DataGoogleArtifactRegistryFile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFile;

DataGoogleArtifactRegistryFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.hashes">hashes</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputBase64Sha256">outputBase64Sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputSha256">outputSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference">DataGoogleArtifactRegistryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileIdInput">fileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPathInput">outputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwriteInput">overwriteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileId">fileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPath">outputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `hashes`<sup>Required</sup> <a name="hashes" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.hashes"></a>

```java
public StringMap getHashes();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputBase64Sha256`<sup>Required</sup> <a name="outputBase64Sha256" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputBase64Sha256"></a>

```java
public java.lang.String getOutputBase64Sha256();
```

- *Type:* java.lang.String

---

##### `outputSha256`<sup>Required</sup> <a name="outputSha256" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputSha256"></a>

```java
public java.lang.String getOutputSha256();
```

- *Type:* java.lang.String

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeouts"></a>

```java
public DataGoogleArtifactRegistryFileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference">DataGoogleArtifactRegistryFileTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `fileIdInput`<sup>Optional</sup> <a name="fileIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileIdInput"></a>

```java
public java.lang.String getFileIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `outputPathInput`<sup>Optional</sup> <a name="outputPathInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPathInput"></a>

```java
public java.lang.String getOutputPathInput();
```

- *Type:* java.lang.String

---

##### `overwriteInput`<sup>Optional</sup> <a name="overwriteInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwriteInput"></a>

```java
public java.lang.Boolean|IResolvable getOverwriteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeoutsInput"></a>

```java
public IResolvable|DataGoogleArtifactRegistryFileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileId"></a>

```java
public java.lang.String getFileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPath"></a>

```java
public java.lang.String getOutputPath();
```

- *Type:* java.lang.String

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwrite"></a>

```java
public java.lang.Boolean|IResolvable getOverwrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryFileConfig <a name="DataGoogleArtifactRegistryFileConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFileConfig;

DataGoogleArtifactRegistryFileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fileId(java.lang.String)
    .location(java.lang.String)
    .outputPath(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .overwrite(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(DataGoogleArtifactRegistryFileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.fileId">fileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.outputPath">outputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.overwrite">overwrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.fileId"></a>

```java
public java.lang.String getFileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}.

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.outputPath"></a>

```java
public java.lang.String getOutputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.overwrite"></a>

```java
public java.lang.Boolean|IResolvable getOverwrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.timeouts"></a>

```java
public DataGoogleArtifactRegistryFileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#timeouts DataGoogleArtifactRegistryFile#timeouts}

---

### DataGoogleArtifactRegistryFileTimeouts <a name="DataGoogleArtifactRegistryFileTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFileTimeouts;

DataGoogleArtifactRegistryFileTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryFileTimeoutsOutputReference <a name="DataGoogleArtifactRegistryFileTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_file.DataGoogleArtifactRegistryFileTimeoutsOutputReference;

new DataGoogleArtifactRegistryFileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataGoogleArtifactRegistryFileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---



