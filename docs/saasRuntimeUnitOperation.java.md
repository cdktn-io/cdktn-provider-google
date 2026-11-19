# `saasRuntimeUnitOperation` Submodule <a name="`saasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google.saasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitOperation <a name="SaasRuntimeUnitOperation" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperation;

SaasRuntimeUnitOperation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .unit(java.lang.String)
    .unitOperationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .deprovision(SaasRuntimeUnitOperationDeprovision)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .provision(SaasRuntimeUnitOperationProvision)
//  .timeouts(SaasRuntimeUnitOperationTimeouts)
//  .upgrade(SaasRuntimeUnitOperationUpgrade)
//  .waitForCompletion(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unitOperationId">unitOperationId</a></code> | <code>java.lang.String</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.waitForCompletion">waitForCompletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unitOperationId"></a>

- *Type:* java.lang.String

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deprovision"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provision"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.upgrade"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `waitForCompletion`<sup>Optional</sup> <a name="waitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.waitForCompletion"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision">putDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision">putProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade">putUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision">resetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision">resetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade">resetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion">resetWaitForCompletion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeprovision` <a name="putDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision"></a>

```java
public void putDeprovision(SaasRuntimeUnitOperationDeprovision value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `putProvision` <a name="putProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision"></a>

```java
public void putProvision(SaasRuntimeUnitOperationProvision value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts"></a>

```java
public void putTimeouts(SaasRuntimeUnitOperationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `putUpgrade` <a name="putUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade"></a>

```java
public void putUpgrade(SaasRuntimeUnitOperationUpgrade value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeprovision` <a name="resetDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision"></a>

```java
public void resetDeprovision()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject"></a>

```java
public void resetProject()
```

##### `resetProvision` <a name="resetProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision"></a>

```java
public void resetProvision()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgrade` <a name="resetUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade"></a>

```java
public void resetUpgrade()
```

##### `resetWaitForCompletion` <a name="resetWaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```java
public void resetWaitForCompletion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperation;

SaasRuntimeUnitOperation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperation;

SaasRuntimeUnitOperation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperation;

SaasRuntimeUnitOperation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperation;

SaasRuntimeUnitOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SaasRuntimeUnitOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SaasRuntimeUnitOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState">engineState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory">errorCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput">deprovisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput">provisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput">unitOperationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput">upgradeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput">waitForCompletionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId">unitOperationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion">waitForCompletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions"></a>

```java
public SaasRuntimeUnitOperationConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deprovision`<sup>Required</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision"></a>

```java
public SaasRuntimeUnitOperationDeprovisionOutputReference getDeprovision();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `engineState`<sup>Required</sup> <a name="engineState" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState"></a>

```java
public java.lang.String getEngineState();
```

- *Type:* java.lang.String

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory"></a>

```java
public java.lang.String getErrorCategory();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provision`<sup>Required</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision"></a>

```java
public SaasRuntimeUnitOperationProvisionOutputReference getProvision();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts"></a>

```java
public SaasRuntimeUnitOperationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade"></a>

```java
public SaasRuntimeUnitOperationUpgradeOutputReference getUpgrade();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deprovisionInput`<sup>Optional</sup> <a name="deprovisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput"></a>

```java
public SaasRuntimeUnitOperationDeprovision getDeprovisionInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `provisionInput`<sup>Optional</sup> <a name="provisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput"></a>

```java
public SaasRuntimeUnitOperationProvision getProvisionInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput"></a>

```java
public IResolvable|SaasRuntimeUnitOperationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `unitOperationIdInput`<sup>Optional</sup> <a name="unitOperationIdInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```java
public java.lang.String getUnitOperationIdInput();
```

- *Type:* java.lang.String

---

##### `upgradeInput`<sup>Optional</sup> <a name="upgradeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput"></a>

```java
public SaasRuntimeUnitOperationUpgrade getUpgradeInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `waitForCompletionInput`<sup>Optional</sup> <a name="waitForCompletionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForCompletionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId"></a>

```java
public java.lang.String getUnitOperationId();
```

- *Type:* java.lang.String

---

##### `waitForCompletion`<sup>Required</sup> <a name="waitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion"></a>

```java
public java.lang.Boolean|IResolvable getWaitForCompletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitOperationConditions <a name="SaasRuntimeUnitOperationConditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationConditions;

SaasRuntimeUnitOperationConditions.builder()
    .build();
```


### SaasRuntimeUnitOperationConfig <a name="SaasRuntimeUnitOperationConfig" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationConfig;

SaasRuntimeUnitOperationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .unit(java.lang.String)
    .unitOperationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .deprovision(SaasRuntimeUnitOperationDeprovision)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .provision(SaasRuntimeUnitOperationProvision)
//  .timeouts(SaasRuntimeUnitOperationTimeouts)
//  .upgrade(SaasRuntimeUnitOperationUpgrade)
//  .waitForCompletion(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId">unitOperationId</a></code> | <code>java.lang.String</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion">waitForCompletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```java
public java.lang.String getUnitOperationId();
```

- *Type:* java.lang.String

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision"></a>

```java
public SaasRuntimeUnitOperationDeprovision getDeprovision();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision"></a>

```java
public SaasRuntimeUnitOperationProvision getProvision();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts"></a>

```java
public SaasRuntimeUnitOperationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade"></a>

```java
public SaasRuntimeUnitOperationUpgrade getUpgrade();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `waitForCompletion`<sup>Optional</sup> <a name="waitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```java
public java.lang.Boolean|IResolvable getWaitForCompletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

### SaasRuntimeUnitOperationDeprovision <a name="SaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationDeprovision;

SaasRuntimeUnitOperationDeprovision.builder()
    .build();
```


### SaasRuntimeUnitOperationProvision <a name="SaasRuntimeUnitOperationProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationProvision;

SaasRuntimeUnitOperationProvision.builder()
//  .inputVariables(IResolvable|java.util.List<SaasRuntimeUnitOperationProvisionInputVariables>)
//  .release(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>></code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release">release</a></code> | <code>java.lang.String</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitOperationProvisionInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>>

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationProvisionInputVariables <a name="SaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationProvisionInputVariables;

SaasRuntimeUnitOperationProvisionInputVariables.builder()
    .variable(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable">variable</a></code> | <code>java.lang.String</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type">type</a></code> | <code>java.lang.String</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value">value</a></code> | <code>java.lang.String</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

### SaasRuntimeUnitOperationTimeouts <a name="SaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationTimeouts;

SaasRuntimeUnitOperationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}.

---

### SaasRuntimeUnitOperationUpgrade <a name="SaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationUpgrade;

SaasRuntimeUnitOperationUpgrade.builder()
//  .inputVariables(IResolvable|java.util.List<SaasRuntimeUnitOperationUpgradeInputVariables>)
//  .release(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>></code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release">release</a></code> | <code>java.lang.String</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitOperationUpgradeInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>>

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationUpgradeInputVariables <a name="SaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationUpgradeInputVariables;

SaasRuntimeUnitOperationUpgradeInputVariables.builder()
    .variable(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable">variable</a></code> | <code>java.lang.String</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type">type</a></code> | <code>java.lang.String</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value">value</a></code> | <code>java.lang.String</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitOperationConditionsList <a name="SaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationConditionsList;

new SaasRuntimeUnitOperationConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get"></a>

```java
public SaasRuntimeUnitOperationConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SaasRuntimeUnitOperationConditionsOutputReference <a name="SaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationConditionsOutputReference;

new SaasRuntimeUnitOperationConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitOperationConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a>

---


### SaasRuntimeUnitOperationDeprovisionOutputReference <a name="SaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationDeprovisionOutputReference;

new SaasRuntimeUnitOperationDeprovisionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitOperationDeprovision getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---


### SaasRuntimeUnitOperationProvisionInputVariablesList <a name="SaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationProvisionInputVariablesList;

new SaasRuntimeUnitOperationProvisionInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```java
public SaasRuntimeUnitOperationProvisionInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitOperationProvisionInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>>

---


### SaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="SaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference;

new SaasRuntimeUnitOperationProvisionInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitOperationProvisionInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>

---


### SaasRuntimeUnitOperationProvisionOutputReference <a name="SaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationProvisionOutputReference;

new SaasRuntimeUnitOperationProvisionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<SaasRuntimeUnitOperationProvisionInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>>

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```java
public void resetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">releaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release">release</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```java
public SaasRuntimeUnitOperationProvisionInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitOperationProvisionInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>>

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```java
public java.lang.String getReleaseInput();
```

- *Type:* java.lang.String

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitOperationProvision getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---


### SaasRuntimeUnitOperationTimeoutsOutputReference <a name="SaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationTimeoutsOutputReference;

new SaasRuntimeUnitOperationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitOperationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---


### SaasRuntimeUnitOperationUpgradeInputVariablesList <a name="SaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationUpgradeInputVariablesList;

new SaasRuntimeUnitOperationUpgradeInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```java
public SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitOperationUpgradeInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>>

---


### SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference;

new SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### SaasRuntimeUnitOperationUpgradeOutputReference <a name="SaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_operation.SaasRuntimeUnitOperationUpgradeOutputReference;

new SaasRuntimeUnitOperationUpgradeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<SaasRuntimeUnitOperationUpgradeInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>>

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```java
public void resetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">releaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release">release</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```java
public SaasRuntimeUnitOperationUpgradeInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitOperationUpgradeInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>>

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```java
public java.lang.String getReleaseInput();
```

- *Type:* java.lang.String

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitOperationUpgrade getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---



