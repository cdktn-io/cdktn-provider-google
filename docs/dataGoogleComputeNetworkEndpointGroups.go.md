# `dataGoogleComputeNetworkEndpointGroups` Submodule <a name="`dataGoogleComputeNetworkEndpointGroups` Submodule" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups google_compute_network_endpoint_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.NewDataGoogleComputeNetworkEndpointGroups(scope Construct, id *string, config DataGoogleComputeNetworkEndpointGroupsConfig) DataGoogleComputeNetworkEndpointGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig">DataGoogleComputeNetworkEndpointGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig">DataGoogleComputeNetworkEndpointGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.DataGoogleComputeNetworkEndpointGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.DataGoogleComputeNetworkEndpointGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.DataGoogleComputeNetworkEndpointGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.DataGoogleComputeNetworkEndpointGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeNetworkEndpointGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeNetworkEndpointGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkEndpointGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups">NetworkEndpointGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `NetworkEndpointGroups`<sup>Required</sup> <a name="NetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups"></a>

```go
func NetworkEndpointGroups() DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkEndpointGroupsConfig <a name="DataGoogleComputeNetworkEndpointGroupsConfig" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

&datagooglecomputenetworkendpointgroups.DataGoogleComputeNetworkEndpointGroupsConfig {
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
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}.

---

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

&datagooglecomputenetworkendpointgroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.NewDataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputenetworkendpointgroups"

datagooglecomputenetworkendpointgroups.NewDataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId">GeneratedId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPort`<sup>Required</sup> <a name="DefaultPort" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort"></a>

```go
func DefaultPort() *f64
```

- *Type:* *f64

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId"></a>

```go
func GeneratedId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType"></a>

```go
func NetworkEndpointType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a>

---



