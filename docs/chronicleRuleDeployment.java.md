# `chronicleRuleDeployment` Submodule <a name="`chronicleRuleDeployment` Submodule" id="@cdktn/provider-google.chronicleRuleDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRuleDeployment <a name="ChronicleRuleDeployment" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment google_chronicle_rule_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeployment;

ChronicleRuleDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
    .rule(java.lang.String)
//  .alerting(java.lang.Boolean|IResolvable)
//  .archived(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .runFrequency(java.lang.String)
//  .timeouts(ChronicleRuleDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.rule">rule</a></code> | <code>java.lang.String</code> | The Rule ID of the rule. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.alerting">alerting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.runFrequency">runFrequency</a></code> | <code>java.lang.String</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#instance ChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#location ChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.rule"></a>

- *Type:* java.lang.String

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#rule ChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.alerting"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#alerting ChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false i.e.
archiving requires a two-step process: first, disable the rule by
setting 'enabled' to false, then set 'archive' to true.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#archived ChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#enabled ChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}.

---

##### `runFrequency`<sup>Optional</sup> <a name="runFrequency" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.runFrequency"></a>

- *Type:* java.lang.String

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#run_frequency ChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#timeouts ChronicleRuleDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetAlerting">resetAlerting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetRunFrequency">resetRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts"></a>

```java
public void putTimeouts(ChronicleRuleDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

---

##### `resetAlerting` <a name="resetAlerting" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetAlerting"></a>

```java
public void resetAlerting()
```

##### `resetArchived` <a name="resetArchived" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRunFrequency` <a name="resetRunFrequency" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetRunFrequency"></a>

```java
public void resetRunFrequency()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleRuleDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeployment;

ChronicleRuleDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeployment;

ChronicleRuleDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeployment;

ChronicleRuleDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeployment;

ChronicleRuleDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleRuleDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleRuleDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleRuleDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleRuleDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleRuleDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archiveTime">archiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.consumerRules">consumerRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.executionState">executionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lastAlertStatusChangeTime">lastAlertStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.producerRules">producerRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference">ChronicleRuleDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alertingInput">alertingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequencyInput">runFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alerting">alerting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequency">runFrequency</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archiveTime`<sup>Required</sup> <a name="archiveTime" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archiveTime"></a>

```java
public java.lang.String getArchiveTime();
```

- *Type:* java.lang.String

---

##### `consumerRules`<sup>Required</sup> <a name="consumerRules" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.consumerRules"></a>

```java
public java.util.List<java.lang.String> getConsumerRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.executionState"></a>

```java
public java.lang.String getExecutionState();
```

- *Type:* java.lang.String

---

##### `lastAlertStatusChangeTime`<sup>Required</sup> <a name="lastAlertStatusChangeTime" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lastAlertStatusChangeTime"></a>

```java
public java.lang.String getLastAlertStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `producerRules`<sup>Required</sup> <a name="producerRules" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.producerRules"></a>

```java
public java.util.List<java.lang.String> getProducerRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeouts"></a>

```java
public ChronicleRuleDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference">ChronicleRuleDeploymentTimeoutsOutputReference</a>

---

##### `alertingInput`<sup>Optional</sup> <a name="alertingInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alertingInput"></a>

```java
public java.lang.Boolean|IResolvable getAlertingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archivedInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `runFrequencyInput`<sup>Optional</sup> <a name="runFrequencyInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequencyInput"></a>

```java
public java.lang.String getRunFrequencyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleRuleDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

---

##### `alerting`<sup>Required</sup> <a name="alerting" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alerting"></a>

```java
public java.lang.Boolean|IResolvable getAlerting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

##### `runFrequency`<sup>Required</sup> <a name="runFrequency" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequency"></a>

```java
public java.lang.String getRunFrequency();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRuleDeploymentConfig <a name="ChronicleRuleDeploymentConfig" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeploymentConfig;

ChronicleRuleDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
    .rule(java.lang.String)
//  .alerting(java.lang.Boolean|IResolvable)
//  .archived(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .runFrequency(java.lang.String)
//  .timeouts(ChronicleRuleDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.rule">rule</a></code> | <code>java.lang.String</code> | The Rule ID of the rule. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.alerting">alerting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.runFrequency">runFrequency</a></code> | <code>java.lang.String</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#instance ChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#location ChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#rule ChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.alerting"></a>

```java
public java.lang.Boolean|IResolvable getAlerting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#alerting ChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false i.e.
archiving requires a two-step process: first, disable the rule by
setting 'enabled' to false, then set 'archive' to true.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#archived ChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#enabled ChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}.

---

##### `runFrequency`<sup>Optional</sup> <a name="runFrequency" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.runFrequency"></a>

```java
public java.lang.String getRunFrequency();
```

- *Type:* java.lang.String

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#run_frequency ChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.timeouts"></a>

```java
public ChronicleRuleDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#timeouts ChronicleRuleDeployment#timeouts}

---

### ChronicleRuleDeploymentTimeouts <a name="ChronicleRuleDeploymentTimeouts" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeploymentTimeouts;

ChronicleRuleDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRuleDeploymentTimeoutsOutputReference <a name="ChronicleRuleDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_rule_deployment.ChronicleRuleDeploymentTimeoutsOutputReference;

new ChronicleRuleDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleRuleDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

---



