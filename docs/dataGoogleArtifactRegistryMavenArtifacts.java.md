# `dataGoogleArtifactRegistryMavenArtifacts` Submodule <a name="`dataGoogleArtifactRegistryMavenArtifacts` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryMavenArtifacts <a name="DataGoogleArtifactRegistryMavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts google_artifact_registry_maven_artifacts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifacts;

DataGoogleArtifactRegistryMavenArtifacts.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifacts resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifacts;

DataGoogleArtifactRegistryMavenArtifacts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifacts;

DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifacts;

DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifacts;

DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifacts resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryMavenArtifacts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryMavenArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryMavenArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.mavenArtifacts">mavenArtifacts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList">DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mavenArtifacts`<sup>Required</sup> <a name="mavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.mavenArtifacts"></a>

```java
public DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList getMavenArtifacts();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList">DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryMavenArtifactsConfig <a name="DataGoogleArtifactRegistryMavenArtifactsConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifactsConfig;

DataGoogleArtifactRegistryMavenArtifactsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}.

---

### DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts;

DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList;

new DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get"></a>

```java
public DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference;

new DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.pomUri">pomUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts">DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pomUri`<sup>Required</sup> <a name="pomUri" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.pomUri"></a>

```java
public java.lang.String getPomUri();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts">DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts</a>

---



