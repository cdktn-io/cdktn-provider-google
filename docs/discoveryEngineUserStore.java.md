# `discoveryEngineUserStore` Submodule <a name="`discoveryEngineUserStore` Submodule" id="@cdktn/provider-google.discoveryEngineUserStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineUserStore <a name="DiscoveryEngineUserStore" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store google_discovery_engine_user_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStore;

DiscoveryEngineUserStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .defaultLicenseConfig(java.lang.String)
//  .enableExpiredLicenseAutoUpdate(java.lang.Boolean|IResolvable)
//  .enableLicenseAutoRegister(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineUserStoreTimeouts)
//  .userStoreId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.defaultLicenseConfig">defaultLicenseConfig</a></code> | <code>java.lang.String</code> | The resource name of the default license config assigned to users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableExpiredLicenseAutoUpdate">enableExpiredLicenseAutoUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable automatic license update for users with expired licenses in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableLicenseAutoRegister">enableLicenseAutoRegister</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable automatic license registration for new users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.userStoreId">userStoreId</a></code> | <code>java.lang.String</code> | The ID of the user store. Currently only accepts "default_user_store". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}

---

##### `defaultLicenseConfig`<sup>Optional</sup> <a name="defaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.defaultLicenseConfig"></a>

- *Type:* java.lang.String

The resource name of the default license config assigned to users created in this user store.

Format:
'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
If 'enableLicenseAutoRegister' is true, new users will automatically
register under the default subscription.
If the default license config doesn't have remaining license seats left,
new users will not be assigned with license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}

---

##### `enableExpiredLicenseAutoUpdate`<sup>Optional</sup> <a name="enableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableExpiredLicenseAutoUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable automatic license update for users with expired licenses in this user store.

If enabled, users with expired licenses will
automatically be updated to the default subscription if there are
remaining license seats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}

---

##### `enableLicenseAutoRegister`<sup>Optional</sup> <a name="enableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableLicenseAutoRegister"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable automatic license registration for new users created in this user store.

If enabled, new users will automatically register under
the default subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}

---

##### `userStoreId`<sup>Optional</sup> <a name="userStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.userStoreId"></a>

- *Type:* java.lang.String

The ID of the user store. Currently only accepts "default_user_store".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig">resetDefaultLicenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate">resetEnableExpiredLicenseAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister">resetEnableLicenseAutoRegister</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId">resetUserStoreId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineUserStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `resetDefaultLicenseConfig` <a name="resetDefaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig"></a>

```java
public void resetDefaultLicenseConfig()
```

##### `resetEnableExpiredLicenseAutoUpdate` <a name="resetEnableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate"></a>

```java
public void resetEnableExpiredLicenseAutoUpdate()
```

##### `resetEnableLicenseAutoRegister` <a name="resetEnableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister"></a>

```java
public void resetEnableLicenseAutoRegister()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserStoreId` <a name="resetUserStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId"></a>

```java
public void resetUserStoreId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStore;

DiscoveryEngineUserStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStore;

DiscoveryEngineUserStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStore;

DiscoveryEngineUserStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStore;

DiscoveryEngineUserStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineUserStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineUserStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineUserStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineUserStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput">defaultLicenseConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput">enableExpiredLicenseAutoUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput">enableLicenseAutoRegisterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput">userStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig">defaultLicenseConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate">enableExpiredLicenseAutoUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister">enableLicenseAutoRegister</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId">userStoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts"></a>

```java
public DiscoveryEngineUserStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a>

---

##### `defaultLicenseConfigInput`<sup>Optional</sup> <a name="defaultLicenseConfigInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput"></a>

```java
public java.lang.String getDefaultLicenseConfigInput();
```

- *Type:* java.lang.String

---

##### `enableExpiredLicenseAutoUpdateInput`<sup>Optional</sup> <a name="enableExpiredLicenseAutoUpdateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableExpiredLicenseAutoUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLicenseAutoRegisterInput`<sup>Optional</sup> <a name="enableLicenseAutoRegisterInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLicenseAutoRegisterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineUserStoreTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `userStoreIdInput`<sup>Optional</sup> <a name="userStoreIdInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput"></a>

```java
public java.lang.String getUserStoreIdInput();
```

- *Type:* java.lang.String

---

##### `defaultLicenseConfig`<sup>Required</sup> <a name="defaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig"></a>

```java
public java.lang.String getDefaultLicenseConfig();
```

- *Type:* java.lang.String

---

##### `enableExpiredLicenseAutoUpdate`<sup>Required</sup> <a name="enableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate"></a>

```java
public java.lang.Boolean|IResolvable getEnableExpiredLicenseAutoUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLicenseAutoRegister`<sup>Required</sup> <a name="enableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister"></a>

```java
public java.lang.Boolean|IResolvable getEnableLicenseAutoRegister();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `userStoreId`<sup>Required</sup> <a name="userStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId"></a>

```java
public java.lang.String getUserStoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineUserStoreConfig <a name="DiscoveryEngineUserStoreConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStoreConfig;

DiscoveryEngineUserStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .defaultLicenseConfig(java.lang.String)
//  .enableExpiredLicenseAutoUpdate(java.lang.Boolean|IResolvable)
//  .enableLicenseAutoRegister(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineUserStoreTimeouts)
//  .userStoreId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig">defaultLicenseConfig</a></code> | <code>java.lang.String</code> | The resource name of the default license config assigned to users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate">enableExpiredLicenseAutoUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable automatic license update for users with expired licenses in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister">enableLicenseAutoRegister</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable automatic license registration for new users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId">userStoreId</a></code> | <code>java.lang.String</code> | The ID of the user store. Currently only accepts "default_user_store". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}

---

##### `defaultLicenseConfig`<sup>Optional</sup> <a name="defaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig"></a>

```java
public java.lang.String getDefaultLicenseConfig();
```

- *Type:* java.lang.String

The resource name of the default license config assigned to users created in this user store.

Format:
'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
If 'enableLicenseAutoRegister' is true, new users will automatically
register under the default subscription.
If the default license config doesn't have remaining license seats left,
new users will not be assigned with license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}

---

##### `enableExpiredLicenseAutoUpdate`<sup>Optional</sup> <a name="enableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate"></a>

```java
public java.lang.Boolean|IResolvable getEnableExpiredLicenseAutoUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable automatic license update for users with expired licenses in this user store.

If enabled, users with expired licenses will
automatically be updated to the default subscription if there are
remaining license seats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}

---

##### `enableLicenseAutoRegister`<sup>Optional</sup> <a name="enableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister"></a>

```java
public java.lang.Boolean|IResolvable getEnableLicenseAutoRegister();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable automatic license registration for new users created in this user store.

If enabled, new users will automatically register under
the default subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts"></a>

```java
public DiscoveryEngineUserStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}

---

##### `userStoreId`<sup>Optional</sup> <a name="userStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId"></a>

```java
public java.lang.String getUserStoreId();
```

- *Type:* java.lang.String

The ID of the user store. Currently only accepts "default_user_store".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}

---

### DiscoveryEngineUserStoreTimeouts <a name="DiscoveryEngineUserStoreTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStoreTimeouts;

DiscoveryEngineUserStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineUserStoreTimeoutsOutputReference <a name="DiscoveryEngineUserStoreTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_user_store.DiscoveryEngineUserStoreTimeoutsOutputReference;

new DiscoveryEngineUserStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineUserStoreTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---



