# `artifactRegistryProjectConfig` Submodule <a name="`artifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google.artifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryProjectConfig <a name="ArtifactRegistryProjectConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfig;

ArtifactRegistryProjectConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .platformLogsConfig(ArtifactRegistryProjectConfigPlatformLogsConfig)
//  .project(java.lang.String)
//  .timeouts(ArtifactRegistryProjectConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#location ArtifactRegistryProjectConfig#location}

---

##### `platformLogsConfig`<sup>Optional</sup> <a name="platformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.platformLogsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#platform_logs_config ArtifactRegistryProjectConfig#platform_logs_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#timeouts ArtifactRegistryProjectConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig">putPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig">resetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlatformLogsConfig` <a name="putPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```java
public void putPlatformLogsConfig(ArtifactRegistryProjectConfigPlatformLogsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts"></a>

```java
public void putTimeouts(ArtifactRegistryProjectConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPlatformLogsConfig` <a name="resetPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```java
public void resetPlatformLogsConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfig;

ArtifactRegistryProjectConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfig;

ArtifactRegistryProjectConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfig;

ArtifactRegistryProjectConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfig;

ArtifactRegistryProjectConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ArtifactRegistryProjectConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ArtifactRegistryProjectConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput">platformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformLogsConfig`<sup>Required</sup> <a name="platformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```java
public ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference getPlatformLogsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts"></a>

```java
public ArtifactRegistryProjectConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `platformLogsConfigInput`<sup>Optional</sup> <a name="platformLogsConfigInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```java
public ArtifactRegistryProjectConfigPlatformLogsConfig getPlatformLogsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```java
public IResolvable|ArtifactRegistryProjectConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryProjectConfigConfig <a name="ArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfigConfig;

ArtifactRegistryProjectConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .platformLogsConfig(ArtifactRegistryProjectConfigPlatformLogsConfig)
//  .project(java.lang.String)
//  .timeouts(ArtifactRegistryProjectConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#location ArtifactRegistryProjectConfig#location}

---

##### `platformLogsConfig`<sup>Optional</sup> <a name="platformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```java
public ArtifactRegistryProjectConfigPlatformLogsConfig getPlatformLogsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#platform_logs_config ArtifactRegistryProjectConfig#platform_logs_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```java
public ArtifactRegistryProjectConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#timeouts ArtifactRegistryProjectConfig#timeouts}

---

### ArtifactRegistryProjectConfigPlatformLogsConfig <a name="ArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfigPlatformLogsConfig;

ArtifactRegistryProjectConfigPlatformLogsConfig.builder()
//  .loggingState(java.lang.String)
//  .severityLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">loggingState</a></code> | <code>java.lang.String</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">severityLevel</a></code> | <code>java.lang.String</code> | The severity level for the logs. |

---

##### `loggingState`<sup>Optional</sup> <a name="loggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```java
public java.lang.String getLoggingState();
```

- *Type:* java.lang.String

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#logging_state ArtifactRegistryProjectConfig#logging_state}

---

##### `severityLevel`<sup>Optional</sup> <a name="severityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```java
public java.lang.String getSeverityLevel();
```

- *Type:* java.lang.String

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#severity_level ArtifactRegistryProjectConfig#severity_level}

---

### ArtifactRegistryProjectConfigTimeouts <a name="ArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfigTimeouts;

ArtifactRegistryProjectConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference;

new ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">resetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">resetSeverityLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoggingState` <a name="resetLoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```java
public void resetLoggingState()
```

##### `resetSeverityLevel` <a name="resetSeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```java
public void resetSeverityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">loggingStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">severityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">loggingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">severityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingStateInput`<sup>Optional</sup> <a name="loggingStateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```java
public java.lang.String getLoggingStateInput();
```

- *Type:* java.lang.String

---

##### `severityLevelInput`<sup>Optional</sup> <a name="severityLevelInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```java
public java.lang.String getSeverityLevelInput();
```

- *Type:* java.lang.String

---

##### `loggingState`<sup>Required</sup> <a name="loggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```java
public java.lang.String getLoggingState();
```

- *Type:* java.lang.String

---

##### `severityLevel`<sup>Required</sup> <a name="severityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```java
public java.lang.String getSeverityLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryProjectConfigPlatformLogsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### ArtifactRegistryProjectConfigTimeoutsOutputReference <a name="ArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.artifact_registry_project_config.ArtifactRegistryProjectConfigTimeoutsOutputReference;

new ArtifactRegistryProjectConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ArtifactRegistryProjectConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---



