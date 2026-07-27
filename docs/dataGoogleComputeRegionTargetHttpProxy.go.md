# `dataGoogleComputeRegionTargetHttpProxy` Submodule <a name="`dataGoogleComputeRegionTargetHttpProxy` Submodule" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionTargetHttpProxy <a name="DataGoogleComputeRegionTargetHttpProxy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy google_compute_region_target_http_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpproxy"

datagooglecomputeregiontargethttpproxy.NewDataGoogleComputeRegionTargetHttpProxy(scope Construct, id *string, config DataGoogleComputeRegionTargetHttpProxyConfig) DataGoogleComputeRegionTargetHttpProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig">DataGoogleComputeRegionTargetHttpProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig">DataGoogleComputeRegionTargetHttpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionTargetHttpProxy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpproxy"

datagooglecomputeregiontargethttpproxy.DataGoogleComputeRegionTargetHttpProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpproxy"

datagooglecomputeregiontargethttpproxy.DataGoogleComputeRegionTargetHttpProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpproxy"

datagooglecomputeregiontargethttpproxy.DataGoogleComputeRegionTargetHttpProxy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpproxy"

datagooglecomputeregiontargethttpproxy.DataGoogleComputeRegionTargetHttpProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeRegionTargetHttpProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeRegionTargetHttpProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeRegionTargetHttpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionTargetHttpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSec">HttpKeepAliveTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.proxyId">ProxyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.urlMap">UrlMap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HttpKeepAliveTimeoutSec`<sup>Required</sup> <a name="HttpKeepAliveTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSec"></a>

```go
func HttpKeepAliveTimeoutSec() *f64
```

- *Type:* *f64

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.proxyId"></a>

```go
func ProxyId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.urlMap"></a>

```go
func UrlMap() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionTargetHttpProxyConfig <a name="DataGoogleComputeRegionTargetHttpProxyConfig" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpproxy"

&datagooglecomputeregiontargethttpproxy.DataGoogleComputeRegionTargetHttpProxyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#id DataGoogleComputeRegionTargetHttpProxy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#project DataGoogleComputeRegionTargetHttpProxy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created target https proxy should reside. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#name DataGoogleComputeRegionTargetHttpProxy#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#id DataGoogleComputeRegionTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#project DataGoogleComputeRegionTargetHttpProxy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpProxy.DataGoogleComputeRegionTargetHttpProxyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_target_http_proxy#region DataGoogleComputeRegionTargetHttpProxy#region}

---



