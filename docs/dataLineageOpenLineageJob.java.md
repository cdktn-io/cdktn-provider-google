# `dataLineageOpenLineageJob` Submodule <a name="`dataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google.dataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageOpenLineageJob <a name="DataLineageOpenLineageJob" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJob;

DataLineageOpenLineageJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .input(IResolvable|java.util.List<DataLineageOpenLineageJobInput>)
//  .output(IResolvable|java.util.List<DataLineageOpenLineageJobOutput>)
//  .timeouts(DataLineageOpenLineageJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.input">input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>></code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.output">output</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>></code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.input"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.output"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput"></a>

```java
public void putInput(IResolvable|java.util.List<DataLineageOpenLineageJobInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput"></a>

```java
public void putOutput(IResolvable|java.util.List<DataLineageOpenLineageJobOutput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts"></a>

```java
public void putTimeouts(DataLineageOpenLineageJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput"></a>

```java
public void resetInput()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJob;

DataLineageOpenLineageJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJob;

DataLineageOpenLineageJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJob;

DataLineageOpenLineageJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJob;

DataLineageOpenLineageJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataLineageOpenLineageJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataLineageOpenLineageJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input">input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output">output</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process">process</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run">run</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput">inputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput">outputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input"></a>

```java
public DataLineageOpenLineageJobInputList getInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output"></a>

```java
public DataLineageOpenLineageJobOutputList getOutput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a>

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process"></a>

```java
public java.lang.String getProcess();
```

- *Type:* java.lang.String

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts"></a>

```java
public DataLineageOpenLineageJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobInput> getInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutput> getOutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput"></a>

```java
public IResolvable|DataLineageOpenLineageJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageOpenLineageJobConfig <a name="DataLineageOpenLineageJobConfig" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobConfig;

DataLineageOpenLineageJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .input(IResolvable|java.util.List<DataLineageOpenLineageJobInput>)
//  .output(IResolvable|java.util.List<DataLineageOpenLineageJobOutput>)
//  .timeouts(DataLineageOpenLineageJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input">input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>></code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output">output</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>></code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobInput> getInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutput> getOutput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts"></a>

```java
public DataLineageOpenLineageJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

### DataLineageOpenLineageJobInput <a name="DataLineageOpenLineageJobInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInput;

DataLineageOpenLineageJobInput.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .catalog(DataLineageOpenLineageJobInputCatalog)
//  .symlink(IResolvable|java.util.List<DataLineageOpenLineageJobInputSymlink>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink">symlink</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>></code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog"></a>

```java
public DataLineageOpenLineageJobInputCatalog getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobInputSymlink> getSymlink();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>>

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobInputCatalog <a name="DataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputCatalog;

DataLineageOpenLineageJobInputCatalog.builder()
    .framework(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework">framework</a></code> | <code>java.lang.String</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name">name</a></code> | <code>java.lang.String</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type">type</a></code> | <code>java.lang.String</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobInputSymlink <a name="DataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputSymlink;

DataLineageOpenLineageJobInputSymlink.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name">name</a></code> | <code>java.lang.String</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type">type</a></code> | <code>java.lang.String</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutput <a name="DataLineageOpenLineageJobOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutput;

DataLineageOpenLineageJobOutput.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .catalog(DataLineageOpenLineageJobOutputCatalog)
//  .columnLineage(DataLineageOpenLineageJobOutputColumnLineage)
//  .symlink(IResolvable|java.util.List<DataLineageOpenLineageJobOutputSymlink>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink">symlink</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>></code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog"></a>

```java
public DataLineageOpenLineageJobOutputCatalog getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `columnLineage`<sup>Optional</sup> <a name="columnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineage getColumnLineage();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#column_lineage DataLineageOpenLineageJob#column_lineage}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputSymlink> getSymlink();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>>

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobOutputCatalog <a name="DataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputCatalog;

DataLineageOpenLineageJobOutputCatalog.builder()
    .framework(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework">framework</a></code> | <code>java.lang.String</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name">name</a></code> | <code>java.lang.String</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type">type</a></code> | <code>java.lang.String</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutputColumnLineage <a name="DataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineage;

DataLineageOpenLineageJobOutputColumnLineage.builder()
    .field(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageField>)
//  .datasetInput(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInput>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field">field</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>></code> | field block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">datasetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>></code> | dataset_input block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageField> getField();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInput> getDatasetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#dataset_input DataLineageOpenLineageJob#dataset_input}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageDatasetInput;

DataLineageOpenLineageJobOutputColumnLineageDatasetInput.builder()
    .field(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .transformation(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">field</a></code> | <code>java.lang.String</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">transformation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>></code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> getTransformation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation;

DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.builder()
    .type(java.lang.String)
//  .subtype(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">type</a></code> | <code>java.lang.String</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">subtype</a></code> | <code>java.lang.String</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputColumnLineageField <a name="DataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageField;

DataLineageOpenLineageJobOutputColumnLineageField.builder()
    .input(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInput>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input">input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>></code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name">name</a></code> | <code>java.lang.String</code> | Output field name. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInput> getInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldInput;

DataLineageOpenLineageJobOutputColumnLineageFieldInput.builder()
    .field(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .transformation(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">field</a></code> | <code>java.lang.String</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">transformation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>></code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> getTransformation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation;

DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.builder()
    .type(java.lang.String)
//  .subtype(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">type</a></code> | <code>java.lang.String</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">subtype</a></code> | <code>java.lang.String</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputSymlink <a name="DataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputSymlink;

DataLineageOpenLineageJobOutputSymlink.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name">name</a></code> | <code>java.lang.String</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type">type</a></code> | <code>java.lang.String</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobTimeouts <a name="DataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobTimeouts;

DataLineageOpenLineageJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageOpenLineageJobInputCatalogOutputReference <a name="DataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputCatalogOutputReference;

new DataLineageOpenLineageJobInputCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```java
public DataLineageOpenLineageJobInputCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---


### DataLineageOpenLineageJobInputList <a name="DataLineageOpenLineageJobInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputList;

new DataLineageOpenLineageJobInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get"></a>

```java
public DataLineageOpenLineageJobInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobInput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>>

---


### DataLineageOpenLineageJobInputOutputReference <a name="DataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputOutputReference;

new DataLineageOpenLineageJobInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```java
public void putCatalog(DataLineageOpenLineageJobInputCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```java
public void putSymlink(IResolvable|java.util.List<DataLineageOpenLineageJobInputSymlink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```java
public void resetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```java
public DataLineageOpenLineageJobInputCatalogOutputReference getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```java
public DataLineageOpenLineageJobInputSymlinkList getSymlink();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```java
public DataLineageOpenLineageJobInputCatalog getCatalogInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobInputSymlink> getSymlinkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>

---


### DataLineageOpenLineageJobInputSymlinkList <a name="DataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputSymlinkList;

new DataLineageOpenLineageJobInputSymlinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get"></a>

```java
public DataLineageOpenLineageJobInputSymlinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobInputSymlink> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>>

---


### DataLineageOpenLineageJobInputSymlinkOutputReference <a name="DataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobInputSymlinkOutputReference;

new DataLineageOpenLineageJobInputSymlinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobInputSymlink getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>

---


### DataLineageOpenLineageJobOutputCatalogOutputReference <a name="DataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputCatalogOutputReference;

new DataLineageOpenLineageJobOutputCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```java
public DataLineageOpenLineageJobOutputCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```java
public void putTransformation(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```java
public void resetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList getTransformation();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> getTransformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```java
public void resetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```java
public java.lang.String getSubtypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldInputList;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```java
public void putTransformation(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```java
public void resetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList getTransformation();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> getTransformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```java
public void resetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```java
public java.lang.String getSubtypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldList;

new DataLineageOpenLineageJobOutputColumnLineageFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageField> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference;

new DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">putInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```java
public void putInput(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">inputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageFieldInputList getInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageFieldInput> getInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageField getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>

---


### DataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputColumnLineageOutputReference;

new DataLineageOpenLineageJobOutputColumnLineageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">putDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">resetDatasetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetInput` <a name="putDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```java
public void putDatasetInput(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

---

##### `putField` <a name="putField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```java
public void putField(IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>>

---

##### `resetDatasetInput` <a name="resetDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```java
public void resetDatasetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">field</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">datasetInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">fieldInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Required</sup> <a name="datasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageDatasetInputList getDatasetInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageFieldList getField();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `datasetInputInput`<sup>Optional</sup> <a name="datasetInputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageDatasetInput> getDatasetInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputColumnLineageField> getFieldInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---


### DataLineageOpenLineageJobOutputList <a name="DataLineageOpenLineageJobOutputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputList;

new DataLineageOpenLineageJobOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get"></a>

```java
public DataLineageOpenLineageJobOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>>

---


### DataLineageOpenLineageJobOutputOutputReference <a name="DataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputOutputReference;

new DataLineageOpenLineageJobOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage">putColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">resetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```java
public void putCatalog(DataLineageOpenLineageJobOutputCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `putColumnLineage` <a name="putColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```java
public void putColumnLineage(DataLineageOpenLineageJobOutputColumnLineage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```java
public void putSymlink(IResolvable|java.util.List<DataLineageOpenLineageJobOutputSymlink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetColumnLineage` <a name="resetColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```java
public void resetColumnLineage()
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```java
public void resetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">columnLineageInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```java
public DataLineageOpenLineageJobOutputCatalogOutputReference getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `columnLineage`<sup>Required</sup> <a name="columnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineageOutputReference getColumnLineage();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```java
public DataLineageOpenLineageJobOutputSymlinkList getSymlink();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```java
public DataLineageOpenLineageJobOutputCatalog getCatalogInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `columnLineageInput`<sup>Optional</sup> <a name="columnLineageInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```java
public DataLineageOpenLineageJobOutputColumnLineage getColumnLineageInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputSymlink> getSymlinkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>

---


### DataLineageOpenLineageJobOutputSymlinkList <a name="DataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputSymlinkList;

new DataLineageOpenLineageJobOutputSymlinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get"></a>

```java
public DataLineageOpenLineageJobOutputSymlinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataLineageOpenLineageJobOutputSymlink> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>>

---


### DataLineageOpenLineageJobOutputSymlinkOutputReference <a name="DataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobOutputSymlinkOutputReference;

new DataLineageOpenLineageJobOutputSymlinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobOutputSymlink getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>

---


### DataLineageOpenLineageJobTimeoutsOutputReference <a name="DataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_lineage_open_lineage_job.DataLineageOpenLineageJobTimeoutsOutputReference;

new DataLineageOpenLineageJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataLineageOpenLineageJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---



