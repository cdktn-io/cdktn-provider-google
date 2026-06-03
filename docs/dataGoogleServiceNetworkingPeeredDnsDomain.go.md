# `dataGoogleServiceNetworkingPeeredDnsDomain` Submodule <a name="`dataGoogleServiceNetworkingPeeredDnsDomain` Submodule" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomain <a name="DataGoogleServiceNetworkingPeeredDnsDomain" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.NewDataGoogleServiceNetworkingPeeredDnsDomain(scope Construct, id *string, config DataGoogleServiceNetworkingPeeredDnsDomainConfig) DataGoogleServiceNetworkingPeeredDnsDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig">DataGoogleServiceNetworkingPeeredDnsDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig">DataGoogleServiceNetworkingPeeredDnsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleServiceNetworkingPeeredDnsDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```go
func DnsSuffix() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomainConfig <a name="DataGoogleServiceNetworkingPeeredDnsDomainConfig" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleservicenetworkingpeereddnsdomain"

&datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Project: *string,
	Service: *string,
	DeletionPolicy: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network">Network</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}.

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#deletion_policy DataGoogleServiceNetworkingPeeredDnsDomain#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



