# `apigeeEnvironmentAddonsConfig` Submodule <a name="`apigeeEnvironmentAddonsConfig` Submodule" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentAddonsConfig <a name="ApigeeEnvironmentAddonsConfig" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config google_apigee_environment_addons_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfig;

ApigeeEnvironmentAddonsConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .envId(java.lang.String)
//  .analyticsEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .timeouts(ApigeeEnvironmentAddonsConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.analyticsEnabled">analyticsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#env_id ApigeeEnvironmentAddonsConfig#env_id}

---

##### `analyticsEnabled`<sup>Optional</sup> <a name="analyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.analyticsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#analytics_enabled ApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#timeouts ApigeeEnvironmentAddonsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled">resetAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts"></a>

```java
public void putTimeouts(ApigeeEnvironmentAddonsConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---

##### `resetAnalyticsEnabled` <a name="resetAnalyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled"></a>

```java
public void resetAnalyticsEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentAddonsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfig;

ApigeeEnvironmentAddonsConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfig;

ApigeeEnvironmentAddonsConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfig;

ApigeeEnvironmentAddonsConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfig;

ApigeeEnvironmentAddonsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeEnvironmentAddonsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigeeEnvironmentAddonsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeEnvironmentAddonsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeEnvironmentAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference">ApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput">analyticsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabled">analyticsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeouts"></a>

```java
public ApigeeEnvironmentAddonsConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference">ApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a>

---

##### `analyticsEnabledInput`<sup>Optional</sup> <a name="analyticsEnabledInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAnalyticsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeoutsInput"></a>

```java
public IResolvable|ApigeeEnvironmentAddonsConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---

##### `analyticsEnabled`<sup>Required</sup> <a name="analyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAnalyticsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentAddonsConfigConfig <a name="ApigeeEnvironmentAddonsConfigConfig" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfigConfig;

ApigeeEnvironmentAddonsConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .envId(java.lang.String)
//  .analyticsEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .timeouts(ApigeeEnvironmentAddonsConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled">analyticsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#env_id ApigeeEnvironmentAddonsConfig#env_id}

---

##### `analyticsEnabled`<sup>Optional</sup> <a name="analyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAnalyticsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#analytics_enabled ApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.timeouts"></a>

```java
public ApigeeEnvironmentAddonsConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#timeouts ApigeeEnvironmentAddonsConfig#timeouts}

---

### ApigeeEnvironmentAddonsConfigTimeouts <a name="ApigeeEnvironmentAddonsConfigTimeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfigTimeouts;

ApigeeEnvironmentAddonsConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#create ApigeeEnvironmentAddonsConfig#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#delete ApigeeEnvironmentAddonsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#update ApigeeEnvironmentAddonsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#create ApigeeEnvironmentAddonsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#delete ApigeeEnvironmentAddonsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_addons_config#update ApigeeEnvironmentAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentAddonsConfigTimeoutsOutputReference <a name="ApigeeEnvironmentAddonsConfigTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_addons_config.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference;

new ApigeeEnvironmentAddonsConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeEnvironmentAddonsConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---



