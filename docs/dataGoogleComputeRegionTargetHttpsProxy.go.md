# `dataGoogleComputeRegionTargetHttpsProxy` Submodule <a name="`dataGoogleComputeRegionTargetHttpsProxy` Submodule" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionTargetHttpsProxy <a name="DataGoogleComputeRegionTargetHttpsProxy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy google_compute_region_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpsproxy"

datagooglecomputeregiontargethttpsproxy.NewDataGoogleComputeRegionTargetHttpsProxy(scope Construct, id *string, config DataGoogleComputeRegionTargetHttpsProxyConfig) DataGoogleComputeRegionTargetHttpsProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig">DataGoogleComputeRegionTargetHttpsProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig">DataGoogleComputeRegionTargetHttpsProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionTargetHttpsProxy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpsproxy"

datagooglecomputeregiontargethttpsproxy.DataGoogleComputeRegionTargetHttpsProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpsproxy"

datagooglecomputeregiontargethttpsproxy.DataGoogleComputeRegionTargetHttpsProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpsproxy"

datagooglecomputeregiontargethttpsproxy.DataGoogleComputeRegionTargetHttpsProxy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpsproxy"

datagooglecomputeregiontargethttpsproxy.DataGoogleComputeRegionTargetHttpsProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeRegionTargetHttpsProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeRegionTargetHttpsProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeRegionTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec">HttpKeepAliveTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.proxyId">ProxyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslCertificates">SslCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.urlMap">UrlMap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CertificateManagerCertificates`<sup>Required</sup> <a name="CertificateManagerCertificates" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.certificateManagerCertificates"></a>

```go
func CertificateManagerCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HttpKeepAliveTimeoutSec`<sup>Required</sup> <a name="HttpKeepAliveTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```go
func HttpKeepAliveTimeoutSec() *f64
```

- *Type:* *f64

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.proxyId"></a>

```go
func ProxyId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.serverTlsPolicy"></a>

```go
func ServerTlsPolicy() *string
```

- *Type:* *string

---

##### `SslCertificates`<sup>Required</sup> <a name="SslCertificates" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslCertificates"></a>

```go
func SslCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.urlMap"></a>

```go
func UrlMap() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionTargetHttpsProxyConfig <a name="DataGoogleComputeRegionTargetHttpsProxyConfig" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputeregiontargethttpsproxy"

&datagooglecomputeregiontargethttpsproxy.DataGoogleComputeRegionTargetHttpsProxyConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#id DataGoogleComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#project DataGoogleComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created target https proxy should reside. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#name DataGoogleComputeRegionTargetHttpsProxy#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#id DataGoogleComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#project DataGoogleComputeRegionTargetHttpsProxy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#region DataGoogleComputeRegionTargetHttpsProxy#region}

---



