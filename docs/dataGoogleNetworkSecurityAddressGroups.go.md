# `dataGoogleNetworkSecurityAddressGroups` Submodule <a name="`dataGoogleNetworkSecurityAddressGroups` Submodule" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkSecurityAddressGroups <a name="DataGoogleNetworkSecurityAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups google_network_security_address_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.NewDataGoogleNetworkSecurityAddressGroups(scope Construct, id *string, config DataGoogleNetworkSecurityAddressGroupsConfig) DataGoogleNetworkSecurityAddressGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig">DataGoogleNetworkSecurityAddressGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig">DataGoogleNetworkSecurityAddressGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent"></a>

```go
func ResetParent()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.DataGoogleNetworkSecurityAddressGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.DataGoogleNetworkSecurityAddressGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.DataGoogleNetworkSecurityAddressGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.DataGoogleNetworkSecurityAddressGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleNetworkSecurityAddressGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleNetworkSecurityAddressGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkSecurityAddressGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups">AddressGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AddressGroups`<sup>Required</sup> <a name="AddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups"></a>

```go
func AddressGroups() DataGoogleNetworkSecurityAddressGroupsAddressGroupsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroups <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

&datagooglenetworksecurityaddressgroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups {

}
```


### DataGoogleNetworkSecurityAddressGroupsConfig <a name="DataGoogleNetworkSecurityAddressGroupsConfig" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

&datagooglenetworksecurityaddressgroups.DataGoogleNetworkSecurityAddressGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Parent: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroupsList <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsList" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.NewDataGoogleNetworkSecurityAddressGroupsAddressGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkSecurityAddressGroupsAddressGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglenetworksecurityaddressgroups"

datagooglenetworksecurityaddressgroups.NewDataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkSecurityAddressGroupsAddressGroups
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a>

---



