# `dataGoogleAgentRegistryAgent` Submodule <a name="`dataGoogleAgentRegistryAgent` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryAgent <a name="DataGoogleAgentRegistryAgent" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent google_agent_registry_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgent(scope Construct, id *string, config DataGoogleAgentRegistryAgentConfig) DataGoogleAgentRegistryAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig">DataGoogleAgentRegistryAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig">DataGoogleAgentRegistryAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAgentId` <a name="ResetAgentId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetAgentId"></a>

```go
func ResetAgentId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.DataGoogleAgentRegistryAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.DataGoogleAgentRegistryAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.DataGoogleAgentRegistryAgent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.DataGoogleAgentRegistryAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleAgentRegistryAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleAgentRegistryAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleAgentRegistryAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.attributes">Attributes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.protocols">Protocols</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList">DataGoogleAgentRegistryAgentProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList">DataGoogleAgentRegistryAgentSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.attributes"></a>

```go
func Attributes() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.protocols"></a>

```go
func Protocols() DataGoogleAgentRegistryAgentProtocolsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList">DataGoogleAgentRegistryAgentProtocolsList</a>

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.skills"></a>

```go
func Skills() DataGoogleAgentRegistryAgentSkillsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList">DataGoogleAgentRegistryAgentSkillsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryAgentConfig <a name="DataGoogleAgentRegistryAgentConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

&datagoogleagentregistryagent.DataGoogleAgentRegistryAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	AgentId: *string,
	Filter: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.agentId">AgentId</a></code> | <code>*string</code> | The unique identifier for the Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.filter">Filter</a></code> | <code>*string</code> | A filter string that identifies a unique Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#location DataGoogleAgentRegistryAgent#location}

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

The unique identifier for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#agent_id DataGoogleAgentRegistryAgent#agent_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

A filter string that identifies a unique Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#filter DataGoogleAgentRegistryAgent#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}.

---

### DataGoogleAgentRegistryAgentProtocols <a name="DataGoogleAgentRegistryAgentProtocols" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

&datagoogleagentregistryagent.DataGoogleAgentRegistryAgentProtocols {

}
```


### DataGoogleAgentRegistryAgentProtocolsInterfaces <a name="DataGoogleAgentRegistryAgentProtocolsInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

&datagoogleagentregistryagent.DataGoogleAgentRegistryAgentProtocolsInterfaces {

}
```


### DataGoogleAgentRegistryAgentSkills <a name="DataGoogleAgentRegistryAgentSkills" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

&datagoogleagentregistryagent.DataGoogleAgentRegistryAgentSkills {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryAgentProtocolsInterfacesList <a name="DataGoogleAgentRegistryAgentProtocolsInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgentProtocolsInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleAgentRegistryAgentProtocolsInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get"></a>

```go
func Get(index *f64) DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference <a name="DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces">DataGoogleAgentRegistryAgentProtocolsInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.protocolBinding"></a>

```go
func ProtocolBinding() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleAgentRegistryAgentProtocolsInterfaces
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces">DataGoogleAgentRegistryAgentProtocolsInterfaces</a>

---


### DataGoogleAgentRegistryAgentProtocolsList <a name="DataGoogleAgentRegistryAgentProtocolsList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgentProtocolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleAgentRegistryAgentProtocolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get"></a>

```go
func Get(index *f64) DataGoogleAgentRegistryAgentProtocolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleAgentRegistryAgentProtocolsOutputReference <a name="DataGoogleAgentRegistryAgentProtocolsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgentProtocolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleAgentRegistryAgentProtocolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList">DataGoogleAgentRegistryAgentProtocolsInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols">DataGoogleAgentRegistryAgentProtocols</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.interfaces"></a>

```go
func Interfaces() DataGoogleAgentRegistryAgentProtocolsInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList">DataGoogleAgentRegistryAgentProtocolsInterfacesList</a>

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.protocolVersion"></a>

```go
func ProtocolVersion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleAgentRegistryAgentProtocols
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols">DataGoogleAgentRegistryAgentProtocols</a>

---


### DataGoogleAgentRegistryAgentSkillsList <a name="DataGoogleAgentRegistryAgentSkillsList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgentSkillsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleAgentRegistryAgentSkillsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get"></a>

```go
func Get(index *f64) DataGoogleAgentRegistryAgentSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleAgentRegistryAgentSkillsOutputReference <a name="DataGoogleAgentRegistryAgentSkillsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleagentregistryagent"

datagoogleagentregistryagent.NewDataGoogleAgentRegistryAgentSkillsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleAgentRegistryAgentSkillsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.examples">Examples</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills">DataGoogleAgentRegistryAgentSkills</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.examples"></a>

```go
func Examples() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleAgentRegistryAgentSkills
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills">DataGoogleAgentRegistryAgentSkills</a>

---



