# `cloudQuotasQuotaAdjusterSettings` Submodule <a name="`cloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaAdjusterSettings <a name="CloudQuotasQuotaAdjusterSettings" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettings;

CloudQuotasQuotaAdjusterSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enablement(java.lang.String)
//  .id(java.lang.String)
//  .parent(java.lang.String)
//  .timeouts(CloudQuotasQuotaAdjusterSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.enablement">enablement</a></code> | <code>java.lang.String</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.enablement"></a>

- *Type:* java.lang.String

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#enablement CloudQuotasQuotaAdjusterSettings#enablement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#parent CloudQuotasQuotaAdjusterSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#timeouts CloudQuotasQuotaAdjusterSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```java
public void putTimeouts(CloudQuotasQuotaAdjusterSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId"></a>

```java
public void resetId()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettings;

CloudQuotasQuotaAdjusterSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettings;

CloudQuotasQuotaAdjusterSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettings;

CloudQuotasQuotaAdjusterSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettings;

CloudQuotasQuotaAdjusterSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudQuotasQuotaAdjusterSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudQuotasQuotaAdjusterSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer">effectiveContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">effectiveEnablement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited">inherited</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom">inheritedFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput">enablementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement">enablement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveContainer`<sup>Required</sup> <a name="effectiveContainer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```java
public java.lang.String getEffectiveContainer();
```

- *Type:* java.lang.String

---

##### `effectiveEnablement`<sup>Required</sup> <a name="effectiveEnablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```java
public java.lang.String getEffectiveEnablement();
```

- *Type:* java.lang.String

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited"></a>

```java
public IResolvable getInherited();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `inheritedFrom`<sup>Required</sup> <a name="inheritedFrom" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom"></a>

```java
public java.lang.String getInheritedFrom();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```java
public CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `enablementInput`<sup>Optional</sup> <a name="enablementInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```java
public java.lang.String getEnablementInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```java
public IResolvable|CloudQuotasQuotaAdjusterSettingsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```java
public java.lang.String getEnablement();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaAdjusterSettingsConfig <a name="CloudQuotasQuotaAdjusterSettingsConfig" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettingsConfig;

CloudQuotasQuotaAdjusterSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enablement(java.lang.String)
//  .id(java.lang.String)
//  .parent(java.lang.String)
//  .timeouts(CloudQuotasQuotaAdjusterSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement">enablement</a></code> | <code>java.lang.String</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```java
public java.lang.String getEnablement();
```

- *Type:* java.lang.String

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#enablement CloudQuotasQuotaAdjusterSettings#enablement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#parent CloudQuotasQuotaAdjusterSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```java
public CloudQuotasQuotaAdjusterSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#timeouts CloudQuotasQuotaAdjusterSettings#timeouts}

---

### CloudQuotasQuotaAdjusterSettingsTimeouts <a name="CloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettingsTimeouts;

CloudQuotasQuotaAdjusterSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_quotas_quota_adjuster_settings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference;

new CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudQuotasQuotaAdjusterSettingsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---



