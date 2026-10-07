# `dataGoogleComputeServiceAttachments` Submodule <a name="`dataGoogleComputeServiceAttachments` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachments <a name="DataGoogleComputeServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments google_compute_service_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachments(scope Construct, id *string, config DataGoogleComputeServiceAttachmentsConfig) DataGoogleComputeServiceAttachments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig">DataGoogleComputeServiceAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig">DataGoogleComputeServiceAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeServiceAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeServiceAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments">ServiceAttachments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ServiceAttachments`<sup>Required</sup> <a name="ServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments"></a>

```go
func ServiceAttachments() DataGoogleComputeServiceAttachmentsServiceAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentsConfig <a name="DataGoogleComputeServiceAttachmentsConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

&datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

### DataGoogleComputeServiceAttachmentsServiceAttachments <a name="DataGoogleComputeServiceAttachmentsServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

&datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachmentsServiceAttachments {

}
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

&datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints {

}
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

&datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists {

}
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

&datagooglecomputeserviceattachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork">ConsumerNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps">NatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount">PropagatedConnectionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```go
func ConsumerNetwork() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps"></a>

```go
func NatIps() *[]*string
```

- *Type:* *[]*string

---

##### `PropagatedConnectionCount`<sup>Required</sup> <a name="PropagatedConnectionCount" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```go
func PropagatedConnectionCount() *f64
```

- *Type:* *f64

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```go
func ConnectionLimit() *f64
```

- *Type:* *f64

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```go
func ProjectIdOrNum() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints">ConnectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference">ConnectionPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint">NatIpsPerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets">NatSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit">PropagatedConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId">PscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections">ReconcileConnections</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero">SendPropagatedConnectionLimitIfZero</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps">ShowNatIps</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService">TargetService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectedEndpoints`<sup>Required</sup> <a name="ConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints"></a>

```go
func ConnectedEndpoints() DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a>

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference"></a>

```go
func ConnectionPreference() *string
```

- *Type:* *string

---

##### `ConsumerAcceptLists`<sup>Required</sup> <a name="ConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists"></a>

```go
func ConsumerAcceptLists() DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a>

---

##### `ConsumerRejectLists`<sup>Required</sup> <a name="ConsumerRejectLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists"></a>

```go
func ConsumerRejectLists() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol"></a>

```go
func EnableProxyProtocol() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatIpsPerEndpoint`<sup>Required</sup> <a name="NatIpsPerEndpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint"></a>

```go
func NatIpsPerEndpoint() *f64
```

- *Type:* *f64

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets"></a>

```go
func NatSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PropagatedConnectionLimit`<sup>Required</sup> <a name="PropagatedConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit"></a>

```go
func PropagatedConnectionLimit() *f64
```

- *Type:* *f64

---

##### `PscServiceAttachmentId`<sup>Required</sup> <a name="PscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId"></a>

```go
func PscServiceAttachmentId() DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a>

---

##### `ReconcileConnections`<sup>Required</sup> <a name="ReconcileConnections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections"></a>

```go
func ReconcileConnections() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="SendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero"></a>

```go
func SendPropagatedConnectionLimitIfZero() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ShowNatIps`<sup>Required</sup> <a name="ShowNatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps"></a>

```go
func ShowNatIps() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService"></a>

```go
func TargetService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeServiceAttachmentsServiceAttachments
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get"></a>

```go
func Get(index *f64) DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecomputeserviceattachments"

datagooglecomputeserviceattachments.NewDataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a>

---



