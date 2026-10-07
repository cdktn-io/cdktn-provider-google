# `dataGoogleObservabilityOrganizationSettings` Submodule <a name="`dataGoogleObservabilityOrganizationSettings` Submodule" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleObservabilityOrganizationSettings <a name="DataGoogleObservabilityOrganizationSettings" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_organization_settings google_observability_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleobservabilityorganizationsettings"

datagoogleobservabilityorganizationsettings.NewDataGoogleObservabilityOrganizationSettings(scope Construct, id *string, config DataGoogleObservabilityOrganizationSettingsConfig) DataGoogleObservabilityOrganizationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig">DataGoogleObservabilityOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig">DataGoogleObservabilityOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleobservabilityorganizationsettings"

datagoogleobservabilityorganizationsettings.DataGoogleObservabilityOrganizationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleobservabilityorganizationsettings"

datagoogleobservabilityorganizationsettings.DataGoogleObservabilityOrganizationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleobservabilityorganizationsettings"

datagoogleobservabilityorganizationsettings.DataGoogleObservabilityOrganizationSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleobservabilityorganizationsettings"

datagoogleobservabilityorganizationsettings.DataGoogleObservabilityOrganizationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleObservabilityOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleObservabilityOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleObservabilityOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DefaultStorageLocation`<sup>Required</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.defaultStorageLocation"></a>

```go
func DefaultStorageLocation() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleObservabilityOrganizationSettingsConfig <a name="DataGoogleObservabilityOrganizationSettingsConfig" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleobservabilityorganizationsettings"

&datagoogleobservabilityorganizationsettings.DataGoogleObservabilityOrganizationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Organization: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.location">Location</a></code> | <code>*string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_organization_settings#id DataGoogleObservabilityOrganizationSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_organization_settings#location DataGoogleObservabilityOrganizationSettings#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_organization_settings#organization DataGoogleObservabilityOrganizationSettings#organization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleObservabilityOrganizationSettings.DataGoogleObservabilityOrganizationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_organization_settings#id DataGoogleObservabilityOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



