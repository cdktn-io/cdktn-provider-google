# `monitoringSnooze` Submodule <a name="`monitoringSnooze` Submodule" id="@cdktn/provider-google.monitoringSnooze"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSnooze <a name="MonitoringSnooze" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze google_monitoring_snooze}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnooze;

MonitoringSnooze.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .criteria(MonitoringSnoozeCriteria)
    .displayName(java.lang.String)
    .interval(MonitoringSnoozeInterval)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(MonitoringSnoozeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#criteria MonitoringSnooze#criteria}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#display_name MonitoringSnooze#display_name}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.interval"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#interval MonitoringSnooze#interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#timeouts MonitoringSnooze#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria"></a>

```java
public void putCriteria(MonitoringSnoozeCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `putInterval` <a name="putInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval"></a>

```java
public void putInterval(MonitoringSnoozeInterval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts"></a>

```java
public void putTimeouts(MonitoringSnoozeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnooze;

MonitoringSnooze.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnooze;

MonitoringSnooze.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnooze;

MonitoringSnooze.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnooze;

MonitoringSnooze.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitoringSnooze.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitoringSnooze to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitoringSnooze that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MonitoringSnooze to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria"></a>

```java
public MonitoringSnoozeCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval"></a>

```java
public MonitoringSnoozeIntervalOutputReference getInterval();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts"></a>

```java
public MonitoringSnoozeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput"></a>

```java
public MonitoringSnoozeCriteria getCriteriaInput();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput"></a>

```java
public MonitoringSnoozeInterval getIntervalInput();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput"></a>

```java
public IResolvable|MonitoringSnoozeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSnoozeConfig <a name="MonitoringSnoozeConfig" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeConfig;

MonitoringSnoozeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .criteria(MonitoringSnoozeCriteria)
    .displayName(java.lang.String)
    .interval(MonitoringSnoozeInterval)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(MonitoringSnoozeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria"></a>

```java
public MonitoringSnoozeCriteria getCriteria();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#criteria MonitoringSnooze#criteria}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#display_name MonitoringSnooze#display_name}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval"></a>

```java
public MonitoringSnoozeInterval getInterval();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#interval MonitoringSnooze#interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts"></a>

```java
public MonitoringSnoozeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#timeouts MonitoringSnooze#timeouts}

---

### MonitoringSnoozeCriteria <a name="MonitoringSnoozeCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeCriteria;

MonitoringSnoozeCriteria.builder()
//  .filter(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter">filter</a></code> | <code>java.lang.String</code> | When you define a snooze, you can also define a filter for that snooze. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | The specific AlertPolicy names for the alert that should be snoozed. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

When you define a snooze, you can also define a filter for that snooze.

The filter is a string containing one or more key-value pairs. The string
uses the standard https://google.aip.dev/160 filter syntax. If you define
a filter for a snooze, then the snooze can only apply to one alert policy.
When the snooze is active, incidents won't be created when the incident
would have key-value pairs (labels) that match those specified by the
filter in the snooze.

Snooze filters support resource, metric, and metadata labels. If multiple
labels are used, then they must be connected with an AND operator. For
example, the following filter applies the snooze to incidents that have a
resource label with an instance ID of 1234567890, a metric label with an
instance name of test_group, a metadata user label with a key of foo and a
value of bar, and a metadata system label with a key of region and a value
of us-central1:

"filter": "resource.labels.instance_id="1234567890" AND metric.labels.instance_name="test_group" AND metadata.user_labels.foo="bar" AND metadata.system_labels.region="us-central1""

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#filter MonitoringSnooze#filter}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

The specific AlertPolicy names for the alert that should be snoozed.

The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]
There is a limit of 16 policies per snooze. This limit is checked during
snooze creation. Exactly 1 alert policy is required if filter is specified
at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#policies MonitoringSnooze#policies}

---

### MonitoringSnoozeInterval <a name="MonitoringSnoozeInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeInterval;

MonitoringSnoozeInterval.builder()
    .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end of the time interval. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The beginning of the time interval. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end of the time interval.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#end_time MonitoringSnooze#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The beginning of the time interval.

The default value for the start time
is the end time. The start time must not be later than the end time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#start_time MonitoringSnooze#start_time}

---

### MonitoringSnoozeTimeouts <a name="MonitoringSnoozeTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeTimeouts;

MonitoringSnoozeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSnoozeCriteriaOutputReference <a name="MonitoringSnoozeCriteriaOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeCriteriaOutputReference;

new MonitoringSnoozeCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies"></a>

```java
public void resetPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue"></a>

```java
public MonitoringSnoozeCriteria getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---


### MonitoringSnoozeIntervalOutputReference <a name="MonitoringSnoozeIntervalOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeIntervalOutputReference;

new MonitoringSnoozeIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue"></a>

```java
public MonitoringSnoozeInterval getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---


### MonitoringSnoozeTimeoutsOutputReference <a name="MonitoringSnoozeTimeoutsOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.monitoring_snooze.MonitoringSnoozeTimeoutsOutputReference;

new MonitoringSnoozeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitoringSnoozeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---



