# `saasRuntimeUnitKind` Submodule <a name="`saasRuntimeUnitKind` Submodule" id="@cdktn/provider-google.saasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitKind <a name="SaasRuntimeUnitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKind;

SaasRuntimeUnitKind.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .saas(java.lang.String)
    .unitKindId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationTemplateComponent(SaasRuntimeUnitKindApplicationTemplateComponent)
//  .appParams(SaasRuntimeUnitKindAppParams)
//  .defaultRelease(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .dependencies(IResolvable|java.util.List<SaasRuntimeUnitKindDependencies>)
//  .id(java.lang.String)
//  .inputVariableMappings(IResolvable|java.util.List<SaasRuntimeUnitKindInputVariableMappings>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .outputVariableMappings(IResolvable|java.util.List<SaasRuntimeUnitKindOutputVariableMappings>)
//  .project(java.lang.String)
//  .timeouts(SaasRuntimeUnitKindTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.saas">saas</a></code> | <code>java.lang.String</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.unitKindId">unitKindId</a></code> | <code>java.lang.String</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.applicationTemplateComponent">applicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | application_template_component block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.appParams">appParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | app_params block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.defaultRelease">defaultRelease</a></code> | <code>java.lang.String</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependencies">dependencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>></code> | dependencies block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings">inputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>></code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings">outputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>></code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.saas"></a>

- *Type:* java.lang.String

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.unitKindId"></a>

- *Type:* java.lang.String

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}

---

##### `applicationTemplateComponent`<sup>Optional</sup> <a name="applicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.applicationTemplateComponent"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

application_template_component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}

---

##### `appParams`<sup>Optional</sup> <a name="appParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.appParams"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

app_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}

---

##### `defaultRelease`<sup>Optional</sup> <a name="defaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.defaultRelease"></a>

- *Type:* java.lang.String

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependencies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>>

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableMappings`<sup>Optional</sup> <a name="inputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>>

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}

---

##### `outputVariableMappings`<sup>Optional</sup> <a name="outputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>>

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent">putApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams">putAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings">putInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings">putOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent">resetApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams">resetAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease">resetDefaultRelease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings">resetInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings">resetOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationTemplateComponent` <a name="putApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent"></a>

```java
public void putApplicationTemplateComponent(SaasRuntimeUnitKindApplicationTemplateComponent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `putAppParams` <a name="putAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams"></a>

```java
public void putAppParams(SaasRuntimeUnitKindAppParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `putDependencies` <a name="putDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies"></a>

```java
public void putDependencies(IResolvable|java.util.List<SaasRuntimeUnitKindDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>>

---

##### `putInputVariableMappings` <a name="putInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings"></a>

```java
public void putInputVariableMappings(IResolvable|java.util.List<SaasRuntimeUnitKindInputVariableMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>>

---

##### `putOutputVariableMappings` <a name="putOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings"></a>

```java
public void putOutputVariableMappings(IResolvable|java.util.List<SaasRuntimeUnitKindOutputVariableMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts"></a>

```java
public void putTimeouts(SaasRuntimeUnitKindTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetApplicationTemplateComponent` <a name="resetApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent"></a>

```java
public void resetApplicationTemplateComponent()
```

##### `resetAppParams` <a name="resetAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams"></a>

```java
public void resetAppParams()
```

##### `resetDefaultRelease` <a name="resetDefaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease"></a>

```java
public void resetDefaultRelease()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDependencies` <a name="resetDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies"></a>

```java
public void resetDependencies()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId"></a>

```java
public void resetId()
```

##### `resetInputVariableMappings` <a name="resetInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings"></a>

```java
public void resetInputVariableMappings()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOutputVariableMappings` <a name="resetOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```java
public void resetOutputVariableMappings()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKind;

SaasRuntimeUnitKind.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKind;

SaasRuntimeUnitKind.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKind;

SaasRuntimeUnitKind.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKind;

SaasRuntimeUnitKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SaasRuntimeUnitKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SaasRuntimeUnitKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent">applicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams">appParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings">inputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings">outputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput">applicationTemplateComponentInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput">appParamsInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput">defaultReleaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput">dependenciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput">inputVariableMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput">outputVariableMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput">saasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput">unitKindIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease">defaultRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas">saas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId">unitKindId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationTemplateComponent`<sup>Required</sup> <a name="applicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponentOutputReference getApplicationTemplateComponent();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a>

---

##### `appParams`<sup>Required</sup> <a name="appParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams"></a>

```java
public SaasRuntimeUnitKindAppParamsOutputReference getAppParams();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies"></a>

```java
public SaasRuntimeUnitKindDependenciesList getDependencies();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `inputVariableMappings`<sup>Required</sup> <a name="inputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsList getInputVariableMappings();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputVariableMappings`<sup>Required</sup> <a name="outputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsList getOutputVariableMappings();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts"></a>

```java
public SaasRuntimeUnitKindTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationTemplateComponentInput`<sup>Optional</sup> <a name="applicationTemplateComponentInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponent getApplicationTemplateComponentInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `appParamsInput`<sup>Optional</sup> <a name="appParamsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput"></a>

```java
public SaasRuntimeUnitKindAppParams getAppParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `defaultReleaseInput`<sup>Optional</sup> <a name="defaultReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```java
public java.lang.String getDefaultReleaseInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindDependencies> getDependenciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariableMappingsInput`<sup>Optional</sup> <a name="inputVariableMappingsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindInputVariableMappings> getInputVariableMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `outputVariableMappingsInput`<sup>Optional</sup> <a name="outputVariableMappingsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindOutputVariableMappings> getOutputVariableMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `saasInput`<sup>Optional</sup> <a name="saasInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput"></a>

```java
public java.lang.String getSaasInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput"></a>

```java
public IResolvable|SaasRuntimeUnitKindTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---

##### `unitKindIdInput`<sup>Optional</sup> <a name="unitKindIdInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput"></a>

```java
public java.lang.String getUnitKindIdInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultRelease`<sup>Required</sup> <a name="defaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease"></a>

```java
public java.lang.String getDefaultRelease();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas"></a>

```java
public java.lang.String getSaas();
```

- *Type:* java.lang.String

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId"></a>

```java
public java.lang.String getUnitKindId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitKindApplicationTemplateComponent <a name="SaasRuntimeUnitKindApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindApplicationTemplateComponent;

SaasRuntimeUnitKindApplicationTemplateComponent.builder()
//  .component(java.lang.String)
//  .compositeRef(SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef)
//  .revision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component">component</a></code> | <code>java.lang.String</code> | Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components'). |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef">compositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | composite_ref block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision">revision</a></code> | <code>java.lang.String</code> | Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate. |

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#component SaasRuntimeUnitKind#component}

---

##### `compositeRef`<sup>Optional</sup> <a name="compositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef getCompositeRef();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

composite_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#composite_ref SaasRuntimeUnitKind#composite_ref}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef;

SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.builder()
    .applicationTemplate(java.lang.String)
//  .revision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate">applicationTemplate</a></code> | <code>java.lang.String</code> | Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision">revision</a></code> | <code>java.lang.String</code> | Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'. |

---

##### `applicationTemplate`<sup>Required</sup> <a name="applicationTemplate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate"></a>

```java
public java.lang.String getApplicationTemplate();
```

- *Type:* java.lang.String

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template SaasRuntimeUnitKind#application_template}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindAppParams <a name="SaasRuntimeUnitKindAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindAppParams;

SaasRuntimeUnitKindAppParams.builder()
//  .group(java.lang.String)
//  .scope(SaasRuntimeUnitKindAppParamsScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group">group</a></code> | <code>java.lang.String</code> | Grouping used to construct the name of the App Hub Application. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | scope block. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Grouping used to construct the name of the App Hub Application.

Multiple UnitKinds can specify the same group to use the same
Application across their respective Units. Corresponds to the
app_boundary_id in the ADC composite ApplicationTemplate. If empty,
the service creates no App Hub application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#group SaasRuntimeUnitKind#group}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope"></a>

```java
public SaasRuntimeUnitKindAppParamsScope getScope();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#scope SaasRuntimeUnitKind#scope}

---

### SaasRuntimeUnitKindAppParamsScope <a name="SaasRuntimeUnitKindAppParamsScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindAppParamsScope;

SaasRuntimeUnitKindAppParamsScope.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type">type</a></code> | <code>java.lang.String</code> | Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#type SaasRuntimeUnitKind#type}

---

### SaasRuntimeUnitKindConfig <a name="SaasRuntimeUnitKindConfig" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindConfig;

SaasRuntimeUnitKindConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .saas(java.lang.String)
    .unitKindId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationTemplateComponent(SaasRuntimeUnitKindApplicationTemplateComponent)
//  .appParams(SaasRuntimeUnitKindAppParams)
//  .defaultRelease(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .dependencies(IResolvable|java.util.List<SaasRuntimeUnitKindDependencies>)
//  .id(java.lang.String)
//  .inputVariableMappings(IResolvable|java.util.List<SaasRuntimeUnitKindInputVariableMappings>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .outputVariableMappings(IResolvable|java.util.List<SaasRuntimeUnitKindOutputVariableMappings>)
//  .project(java.lang.String)
//  .timeouts(SaasRuntimeUnitKindTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas">saas</a></code> | <code>java.lang.String</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId">unitKindId</a></code> | <code>java.lang.String</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent">applicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | application_template_component block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams">appParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | app_params block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease">defaultRelease</a></code> | <code>java.lang.String</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies">dependencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>></code> | dependencies block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings">inputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>></code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings">outputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>></code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas"></a>

```java
public java.lang.String getSaas();
```

- *Type:* java.lang.String

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId"></a>

```java
public java.lang.String getUnitKindId();
```

- *Type:* java.lang.String

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}

---

##### `applicationTemplateComponent`<sup>Optional</sup> <a name="applicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponent getApplicationTemplateComponent();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

application_template_component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}

---

##### `appParams`<sup>Optional</sup> <a name="appParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams"></a>

```java
public SaasRuntimeUnitKindAppParams getAppParams();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

app_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}

---

##### `defaultRelease`<sup>Optional</sup> <a name="defaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```java
public java.lang.String getDefaultRelease();
```

- *Type:* java.lang.String

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindDependencies> getDependencies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>>

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableMappings`<sup>Optional</sup> <a name="inputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindInputVariableMappings> getInputVariableMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>>

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}

---

##### `outputVariableMappings`<sup>Optional</sup> <a name="outputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindOutputVariableMappings> getOutputVariableMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>>

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts"></a>

```java
public SaasRuntimeUnitKindTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}

---

### SaasRuntimeUnitKindDependencies <a name="SaasRuntimeUnitKindDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindDependencies;

SaasRuntimeUnitKindDependencies.builder()
    .alias(java.lang.String)
    .unitKind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias">alias</a></code> | <code>java.lang.String</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | The unit kind of the dependency. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#alias SaasRuntimeUnitKind#alias}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind SaasRuntimeUnitKind#unit_kind}

---

### SaasRuntimeUnitKindInputVariableMappings <a name="SaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappings;

SaasRuntimeUnitKindInputVariableMappings.builder()
    .variable(java.lang.String)
//  .from(SaasRuntimeUnitKindInputVariableMappingsFrom)
//  .to(SaasRuntimeUnitKindInputVariableMappingsTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable">variable</a></code> | <code>java.lang.String</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsFrom getFrom();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsTo getTo();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindInputVariableMappingsFrom <a name="SaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappingsFrom;

SaasRuntimeUnitKindInputVariableMappingsFrom.builder()
    .dependency(java.lang.String)
    .outputVariable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindInputVariableMappingsTo <a name="SaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappingsTo;

SaasRuntimeUnitKindInputVariableMappingsTo.builder()
    .dependency(java.lang.String)
    .inputVariable(java.lang.String)
//  .ignoreForLookup(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindOutputVariableMappings <a name="SaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappings;

SaasRuntimeUnitKindOutputVariableMappings.builder()
    .variable(java.lang.String)
//  .from(SaasRuntimeUnitKindOutputVariableMappingsFrom)
//  .to(SaasRuntimeUnitKindOutputVariableMappingsTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable">variable</a></code> | <code>java.lang.String</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsFrom getFrom();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsTo getTo();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindOutputVariableMappingsFrom <a name="SaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappingsFrom;

SaasRuntimeUnitKindOutputVariableMappingsFrom.builder()
    .dependency(java.lang.String)
    .outputVariable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindOutputVariableMappingsTo <a name="SaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappingsTo;

SaasRuntimeUnitKindOutputVariableMappingsTo.builder()
    .dependency(java.lang.String)
    .inputVariable(java.lang.String)
//  .ignoreForLookup(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindTimeouts <a name="SaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindTimeouts;

SaasRuntimeUnitKindTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference;

new SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision"></a>

```java
public void resetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">syncOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput">applicationTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">applicationTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `syncOperation`<sup>Required</sup> <a name="syncOperation" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```java
public java.lang.String getSyncOperation();
```

- *Type:* java.lang.String

---

##### `applicationTemplateInput`<sup>Optional</sup> <a name="applicationTemplateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput"></a>

```java
public java.lang.String getApplicationTemplateInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `applicationTemplate`<sup>Required</sup> <a name="applicationTemplate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```java
public java.lang.String getApplicationTemplate();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeUnitKindApplicationTemplateComponentOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference;

new SaasRuntimeUnitKindApplicationTemplateComponentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef">putCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent">resetComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef">resetCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompositeRef` <a name="putCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef"></a>

```java
public void putCompositeRef(SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `resetComponent` <a name="resetComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent"></a>

```java
public void resetComponent()
```

##### `resetCompositeRef` <a name="resetCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef"></a>

```java
public void resetCompositeRef()
```

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision"></a>

```java
public void resetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef">compositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput">componentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput">compositeRefInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compositeRef`<sup>Required</sup> <a name="compositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference getCompositeRef();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a>

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput"></a>

```java
public java.lang.String getComponentInput();
```

- *Type:* java.lang.String

---

##### `compositeRefInput`<sup>Optional</sup> <a name="compositeRefInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef getCompositeRefInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindApplicationTemplateComponent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---


### SaasRuntimeUnitKindAppParamsOutputReference <a name="SaasRuntimeUnitKindAppParamsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindAppParamsOutputReference;

new SaasRuntimeUnitKindAppParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScope` <a name="putScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope"></a>

```java
public void putScope(SaasRuntimeUnitKindAppParamsScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope"></a>

```java
public SaasRuntimeUnitKindAppParamsScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput"></a>

```java
public SaasRuntimeUnitKindAppParamsScope getScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindAppParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---


### SaasRuntimeUnitKindAppParamsScopeOutputReference <a name="SaasRuntimeUnitKindAppParamsScopeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindAppParamsScopeOutputReference;

new SaasRuntimeUnitKindAppParamsScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindAppParamsScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---


### SaasRuntimeUnitKindDependenciesList <a name="SaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindDependenciesList;

new SaasRuntimeUnitKindDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get"></a>

```java
public SaasRuntimeUnitKindDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindDependencies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>>

---


### SaasRuntimeUnitKindDependenciesOutputReference <a name="SaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindDependenciesOutputReference;

new SaasRuntimeUnitKindDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">unitKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```java
public java.lang.String getUnitKindInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitKindDependencies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>

---


### SaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference;

new SaasRuntimeUnitKindInputVariableMappingsFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```java
public java.lang.String getOutputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsFrom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindInputVariableMappingsList <a name="SaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappingsList;

new SaasRuntimeUnitKindInputVariableMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindInputVariableMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>>

---


### SaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappingsOutputReference;

new SaasRuntimeUnitKindInputVariableMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```java
public void putFrom(SaasRuntimeUnitKindInputVariableMappingsFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```java
public void putTo(SaasRuntimeUnitKindInputVariableMappingsTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsFromOutputReference getFrom();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsToOutputReference getTo();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsFrom getFromInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsTo getToInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitKindInputVariableMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>

---


### SaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference;

new SaasRuntimeUnitKindInputVariableMappingsToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```java
public void resetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```java
public java.lang.String getInputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindInputVariableMappingsTo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference;

new SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```java
public java.lang.String getOutputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsFrom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsList <a name="SaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappingsList;

new SaasRuntimeUnitKindOutputVariableMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SaasRuntimeUnitKindOutputVariableMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>>

---


### SaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference;

new SaasRuntimeUnitKindOutputVariableMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```java
public void putFrom(SaasRuntimeUnitKindOutputVariableMappingsFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```java
public void putTo(SaasRuntimeUnitKindOutputVariableMappingsTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference getFrom();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsToOutputReference getTo();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsFrom getFromInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsTo getToInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitKindOutputVariableMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference;

new SaasRuntimeUnitKindOutputVariableMappingsToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```java
public void resetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```java
public java.lang.String getInputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```java
public SaasRuntimeUnitKindOutputVariableMappingsTo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindTimeoutsOutputReference <a name="SaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_unit_kind.SaasRuntimeUnitKindTimeoutsOutputReference;

new SaasRuntimeUnitKindTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeUnitKindTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---



