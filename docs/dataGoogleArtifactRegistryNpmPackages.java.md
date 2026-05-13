# `dataGoogleArtifactRegistryNpmPackages` Submodule <a name="`dataGoogleArtifactRegistryNpmPackages` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryNpmPackages <a name="DataGoogleArtifactRegistryNpmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages google_artifact_registry_npm_packages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackages;

DataGoogleArtifactRegistryNpmPackages.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryNpmPackages resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackages;

DataGoogleArtifactRegistryNpmPackages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackages;

DataGoogleArtifactRegistryNpmPackages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackages;

DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackages;

DataGoogleArtifactRegistryNpmPackages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryNpmPackages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryNpmPackages resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryNpmPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryNpmPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryNpmPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.npmPackages">npmPackages</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList">DataGoogleArtifactRegistryNpmPackagesNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `npmPackages`<sup>Required</sup> <a name="npmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.npmPackages"></a>

```java
public DataGoogleArtifactRegistryNpmPackagesNpmPackagesList getNpmPackages();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList">DataGoogleArtifactRegistryNpmPackagesNpmPackagesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryNpmPackagesConfig <a name="DataGoogleArtifactRegistryNpmPackagesConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackagesConfig;

DataGoogleArtifactRegistryNpmPackagesConfig.builder()
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
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}.

---

### DataGoogleArtifactRegistryNpmPackagesNpmPackages <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackagesNpmPackages;

DataGoogleArtifactRegistryNpmPackagesNpmPackages.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryNpmPackagesNpmPackagesList <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackagesList" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList;

new DataGoogleArtifactRegistryNpmPackagesNpmPackagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get"></a>

```java
public DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_artifact_registry_npm_packages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference;

new DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.packageName">packageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages">DataGoogleArtifactRegistryNpmPackagesNpmPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryNpmPackagesNpmPackages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages">DataGoogleArtifactRegistryNpmPackagesNpmPackages</a>

---



