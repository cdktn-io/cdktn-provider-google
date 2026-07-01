# `dataGoogleArtifactRegistryMavenArtifact` Submodule <a name="`dataGoogleArtifactRegistryMavenArtifact` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryMavenArtifact <a name="DataGoogleArtifactRegistryMavenArtifact" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact google_artifact_registry_maven_artifact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifact.DataGoogleArtifactRegistryMavenArtifact;

DataGoogleArtifactRegistryMavenArtifact.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactId(java.lang.String)
    .groupId(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.artifactId">artifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.artifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifact resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifact.DataGoogleArtifactRegistryMavenArtifact;

DataGoogleArtifactRegistryMavenArtifact.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifact.DataGoogleArtifactRegistryMavenArtifact;

DataGoogleArtifactRegistryMavenArtifact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifact.DataGoogleArtifactRegistryMavenArtifact;

DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifact.DataGoogleArtifactRegistryMavenArtifact;

DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryMavenArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryMavenArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryMavenArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.pomUri">pomUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactIdInput">artifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pomUri`<sup>Required</sup> <a name="pomUri" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.pomUri"></a>

```java
public java.lang.String getPomUri();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `artifactIdInput`<sup>Optional</sup> <a name="artifactIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactIdInput"></a>

```java
public java.lang.String getArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryMavenArtifactConfig <a name="DataGoogleArtifactRegistryMavenArtifactConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_maven_artifact.DataGoogleArtifactRegistryMavenArtifactConfig;

DataGoogleArtifactRegistryMavenArtifactConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactId(java.lang.String)
    .groupId(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}.

---



