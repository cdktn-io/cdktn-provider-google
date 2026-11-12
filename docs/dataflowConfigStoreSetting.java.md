# `dataflowConfigStoreSetting` Submodule <a name="`dataflowConfigStoreSetting` Submodule" id="@cdktn/provider-google.dataflowConfigStoreSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowConfigStoreSetting <a name="DataflowConfigStoreSetting" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting google_dataflow_config_store_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSetting;

DataflowConfigStoreSetting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configStoreSettingId(java.lang.String)
    .location(java.lang.String)
    .parent(java.lang.String)
    .value(DataflowConfigStoreSettingValue)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataflowConfigStoreSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.configStoreSettingId">configStoreSettingId</a></code> | <code>java.lang.String</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.value">value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configStoreSettingId`<sup>Required</sup> <a name="configStoreSettingId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.configStoreSettingId"></a>

- *Type:* java.lang.String

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#config_store_setting_id DataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#location DataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#parent DataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#value DataflowConfigStoreSetting#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#deletion_policy DataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#timeouts DataflowConfigStoreSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts"></a>

```java
public void putTimeouts(DataflowConfigStoreSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue"></a>

```java
public void putValue(DataflowConfigStoreSettingValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSetting;

DataflowConfigStoreSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSetting;

DataflowConfigStoreSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSetting;

DataflowConfigStoreSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSetting;

DataflowConfigStoreSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataflowConfigStoreSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataflowConfigStoreSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataflowConfigStoreSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataflowConfigStoreSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference">DataflowConfigStoreSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.value">value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference">DataflowConfigStoreSettingValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingIdInput">configStoreSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.valueInput">valueInput</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingId">configStoreSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeouts"></a>

```java
public DataflowConfigStoreSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference">DataflowConfigStoreSettingTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.value"></a>

```java
public DataflowConfigStoreSettingValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference">DataflowConfigStoreSettingValueOutputReference</a>

---

##### `configStoreSettingIdInput`<sup>Optional</sup> <a name="configStoreSettingIdInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingIdInput"></a>

```java
public java.lang.String getConfigStoreSettingIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeoutsInput"></a>

```java
public IResolvable|DataflowConfigStoreSettingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.valueInput"></a>

```java
public DataflowConfigStoreSettingValue getValueInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---

##### `configStoreSettingId`<sup>Required</sup> <a name="configStoreSettingId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingId"></a>

```java
public java.lang.String getConfigStoreSettingId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowConfigStoreSettingConfig <a name="DataflowConfigStoreSettingConfig" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSettingConfig;

DataflowConfigStoreSettingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configStoreSettingId(java.lang.String)
    .location(java.lang.String)
    .parent(java.lang.String)
    .value(DataflowConfigStoreSettingValue)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataflowConfigStoreSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.configStoreSettingId">configStoreSettingId</a></code> | <code>java.lang.String</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.value">value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configStoreSettingId`<sup>Required</sup> <a name="configStoreSettingId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.configStoreSettingId"></a>

```java
public java.lang.String getConfigStoreSettingId();
```

- *Type:* java.lang.String

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#config_store_setting_id DataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#location DataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#parent DataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.value"></a>

```java
public DataflowConfigStoreSettingValue getValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#value DataflowConfigStoreSetting#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#deletion_policy DataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.timeouts"></a>

```java
public DataflowConfigStoreSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#timeouts DataflowConfigStoreSetting#timeouts}

---

### DataflowConfigStoreSettingTimeouts <a name="DataflowConfigStoreSettingTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSettingTimeouts;

DataflowConfigStoreSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}.

---

### DataflowConfigStoreSettingValue <a name="DataflowConfigStoreSettingValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSettingValue;

DataflowConfigStoreSettingValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#bool_value DataflowConfigStoreSetting#bool_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#string_value DataflowConfigStoreSetting#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowConfigStoreSettingTimeoutsOutputReference <a name="DataflowConfigStoreSettingTimeoutsOutputReference" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSettingTimeoutsOutputReference;

new DataflowConfigStoreSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataflowConfigStoreSettingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---


### DataflowConfigStoreSettingValueOutputReference <a name="DataflowConfigStoreSettingValueOutputReference" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_config_store_setting.DataflowConfigStoreSettingValueOutputReference;

new DataflowConfigStoreSettingValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.internalValue"></a>

```java
public DataflowConfigStoreSettingValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---



