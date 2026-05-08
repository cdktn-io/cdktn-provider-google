# `dataGoogleNetworkManagementConnectivityTests` Submodule <a name="`dataGoogleNetworkManagementConnectivityTests` Submodule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests google_network_management_connectivity_tests}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTests(scope Construct, id *string, config DataGoogleNetworkManagementConnectivityTestsConfig) DataGoogleNetworkManagementConnectivityTests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig">DataGoogleNetworkManagementConnectivityTestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig">DataGoogleNetworkManagementConnectivityTestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleNetworkManagementConnectivityTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests">ConnectivityTests</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConnectivityTests`<sup>Required</sup> <a name="ConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests"></a>

```go
func ConnectivityTests() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestsConfig <a name="DataGoogleNetworkManagementConnectivityTestsConfig" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter">Filter</a></code> | <code>*string</code> | Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests#filter DataGoogleNetworkManagementConnectivityTests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}.

---

### DataGoogleNetworkManagementConnectivityTestsConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests {

}
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination {

}
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource {

}
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion {

}
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction {

}
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

&datagooglenetworkmanagementconnectivitytests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster">RedisCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance">RedisInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance"></a>

```go
func CloudSqlInstance() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `GkeMasterCluster`<sup>Required</sup> <a name="GkeMasterCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster"></a>

```go
func GkeMasterCluster() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RedisCluster`<sup>Required</sup> <a name="RedisCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster"></a>

```go
func RedisCluster() *string
```

- *Type:* *string

---

##### `RedisInstance`<sup>Required</sup> <a name="RedisInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance"></a>

```go
func RedisInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks">BypassFirewallChecks</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects">RelatedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip">RoundTrip</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassFirewallChecks`<sup>Required</sup> <a name="BypassFirewallChecks" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks"></a>

```go
func BypassFirewallChecks() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination"></a>

```go
func Destination() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RelatedProjects`<sup>Required</sup> <a name="RelatedProjects" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects"></a>

```go
func RelatedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `RoundTrip`<sup>Required</sup> <a name="RoundTrip" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip"></a>

```go
func RoundTrip() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source"></a>

```go
func Source() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestsConnectivityTests
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglenetworkmanagementconnectivitytests"

datagooglenetworkmanagementconnectivitytests.NewDataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion">AppEngineVersion</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision">CloudRunRevision</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppEngineVersion`<sup>Required</sup> <a name="AppEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion"></a>

```go
func AppEngineVersion() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a>

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction"></a>

```go
func CloudFunction() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a>

---

##### `CloudRunRevision`<sup>Required</sup> <a name="CloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision"></a>

```go
func CloudRunRevision() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a>

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance"></a>

```go
func CloudSqlInstance() *string
```

- *Type:* *string

---

##### `GkeMasterCluster`<sup>Required</sup> <a name="GkeMasterCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster"></a>

```go
func GkeMasterCluster() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a>

---



