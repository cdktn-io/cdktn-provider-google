# `observabilityProjectSettings` Submodule <a name="`observabilityProjectSettings` Submodule" id="@cdktn/provider-google.observabilityProjectSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityProjectSettings <a name="ObservabilityProjectSettings" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings google_observability_project_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettings;

ObservabilityProjectSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .defaultStorageLocation(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ObservabilityProjectSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.defaultStorageLocation">defaultStorageLocation</a></code> | <code>java.lang.String</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#id ObservabilityProjectSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#project ObservabilityProjectSettings#project}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#location ObservabilityProjectSettings#location}

---

##### `defaultStorageLocation`<sup>Optional</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.defaultStorageLocation"></a>

- *Type:* java.lang.String

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#default_storage_location ObservabilityProjectSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#id ObservabilityProjectSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#kms_key_name ObservabilityProjectSettings#kms_key_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#project ObservabilityProjectSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#timeouts ObservabilityProjectSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetDefaultStorageLocation">resetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.putTimeouts"></a>

```java
public void putTimeouts(ObservabilityProjectSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

---

##### `resetDefaultStorageLocation` <a name="resetDefaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetDefaultStorageLocation"></a>

```java
public void resetDefaultStorageLocation()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityProjectSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isConstruct"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettings;

ObservabilityProjectSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettings;

ObservabilityProjectSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettings;

ObservabilityProjectSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettings;

ObservabilityProjectSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObservabilityProjectSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ObservabilityProjectSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObservabilityProjectSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObservabilityProjectSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityProjectSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference">ObservabilityProjectSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocationInput">defaultStorageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeouts"></a>

```java
public ObservabilityProjectSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference">ObservabilityProjectSettingsTimeoutsOutputReference</a>

---

##### `defaultStorageLocationInput`<sup>Optional</sup> <a name="defaultStorageLocationInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocationInput"></a>

```java
public java.lang.String getDefaultStorageLocationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeoutsInput"></a>

```java
public IResolvable|ObservabilityProjectSettingsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

---

##### `defaultStorageLocation`<sup>Required</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocation"></a>

```java
public java.lang.String getDefaultStorageLocation();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityProjectSettingsConfig <a name="ObservabilityProjectSettingsConfig" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettingsConfig;

ObservabilityProjectSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .defaultStorageLocation(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ObservabilityProjectSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>java.lang.String</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#id ObservabilityProjectSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#project ObservabilityProjectSettings#project}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#location ObservabilityProjectSettings#location}

---

##### `defaultStorageLocation`<sup>Optional</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.defaultStorageLocation"></a>

```java
public java.lang.String getDefaultStorageLocation();
```

- *Type:* java.lang.String

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#default_storage_location ObservabilityProjectSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#id ObservabilityProjectSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#kms_key_name ObservabilityProjectSettings#kms_key_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#project ObservabilityProjectSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.timeouts"></a>

```java
public ObservabilityProjectSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#timeouts ObservabilityProjectSettings#timeouts}

---

### ObservabilityProjectSettingsTimeouts <a name="ObservabilityProjectSettingsTimeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettingsTimeouts;

ObservabilityProjectSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#create ObservabilityProjectSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#delete ObservabilityProjectSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#update ObservabilityProjectSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#create ObservabilityProjectSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#delete ObservabilityProjectSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#update ObservabilityProjectSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityProjectSettingsTimeoutsOutputReference <a name="ObservabilityProjectSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.observability_project_settings.ObservabilityProjectSettingsTimeoutsOutputReference;

new ObservabilityProjectSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ObservabilityProjectSettingsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

---



