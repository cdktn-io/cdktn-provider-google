# `dataGoogleDiscoveryEngineSearchEngineIamPolicy` Submodule <a name="`dataGoogleDiscoveryEngineSearchEngineIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineSearchEngineIamPolicy <a name="DataGoogleDiscoveryEngineSearchEngineIamPolicy" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy google_discovery_engine_search_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglediscoveryenginesearchengineiampolicy"

datagooglediscoveryenginesearchengineiampolicy.NewDataGoogleDiscoveryEngineSearchEngineIamPolicy(scope Construct, id *string, config DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig) DataGoogleDiscoveryEngineSearchEngineIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig">DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig">DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglediscoveryenginesearchengineiampolicy"

datagooglediscoveryenginesearchengineiampolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglediscoveryenginesearchengineiampolicy"

datagooglediscoveryenginesearchengineiampolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglediscoveryenginesearchengineiampolicy"

datagooglediscoveryenginesearchengineiampolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglediscoveryenginesearchengineiampolicy"

datagooglediscoveryenginesearchengineiampolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleDiscoveryEngineSearchEngineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleDiscoveryEngineSearchEngineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineSearchEngineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig <a name="DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglediscoveryenginesearchengineiampolicy"

&datagooglediscoveryenginesearchengineiampolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionId: *string,
	EngineId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#collection_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#collection_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.engineId">EngineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#engine_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#engine_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#id DataGoogleDiscoveryEngineSearchEngineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#location DataGoogleDiscoveryEngineSearchEngineIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#project DataGoogleDiscoveryEngineSearchEngineIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#collection_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#collection_id}.

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#engine_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#engine_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#id DataGoogleDiscoveryEngineSearchEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#location DataGoogleDiscoveryEngineSearchEngineIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_search_engine_iam_policy#project DataGoogleDiscoveryEngineSearchEngineIamPolicy#project}.

---



