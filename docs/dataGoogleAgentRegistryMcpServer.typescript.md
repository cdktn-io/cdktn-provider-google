# `dataGoogleAgentRegistryMcpServer` Submodule <a name="`dataGoogleAgentRegistryMcpServer` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryMcpServer <a name="DataGoogleAgentRegistryMcpServer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server google_agent_registry_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer(scope: Construct, id: string, config: DataGoogleAgentRegistryMcpServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig">DataGoogleAgentRegistryMcpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig">DataGoogleAgentRegistryMcpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetMcpServerId">resetMcpServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMcpServerId` <a name="resetMcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetMcpServerId"></a>

```typescript
public resetMcpServerId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryMcpServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleAgentRegistryMcpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAgentRegistryMcpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAgentRegistryMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList">DataGoogleAgentRegistryMcpServerInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList">DataGoogleAgentRegistryMcpServerToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerIdInput">mcpServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerId">mcpServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.attributes"></a>

```typescript
public readonly attributes: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.interfaces"></a>

```typescript
public readonly interfaces: DataGoogleAgentRegistryMcpServerInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList">DataGoogleAgentRegistryMcpServerInterfacesList</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tools"></a>

```typescript
public readonly tools: DataGoogleAgentRegistryMcpServerToolsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList">DataGoogleAgentRegistryMcpServerToolsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mcpServerIdInput`<sup>Optional</sup> <a name="mcpServerIdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerIdInput"></a>

```typescript
public readonly mcpServerIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerId"></a>

```typescript
public readonly mcpServerId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryMcpServerConfig <a name="DataGoogleAgentRegistryMcpServerConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

const dataGoogleAgentRegistryMcpServerConfig: dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.filter">filter</a></code> | <code>string</code> | A filter string that identifies a unique MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.mcpServerId">mcpServerId</a></code> | <code>string</code> | The unique identifier for the MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#location DataGoogleAgentRegistryMcpServer#location}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A filter string that identifies a unique MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#filter DataGoogleAgentRegistryMcpServer#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpServerId`<sup>Optional</sup> <a name="mcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.mcpServerId"></a>

```typescript
public readonly mcpServerId: string;
```

- *Type:* string

The unique identifier for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#mcp_server_id DataGoogleAgentRegistryMcpServer#mcp_server_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}.

---

### DataGoogleAgentRegistryMcpServerInterfaces <a name="DataGoogleAgentRegistryMcpServerInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

const dataGoogleAgentRegistryMcpServerInterfaces: dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces = { ... }
```


### DataGoogleAgentRegistryMcpServerTools <a name="DataGoogleAgentRegistryMcpServerTools" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

const dataGoogleAgentRegistryMcpServerTools: dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools = { ... }
```


### DataGoogleAgentRegistryMcpServerToolsAnnotations <a name="DataGoogleAgentRegistryMcpServerToolsAnnotations" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

const dataGoogleAgentRegistryMcpServerToolsAnnotations: dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryMcpServerInterfacesList <a name="DataGoogleAgentRegistryMcpServerInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get"></a>

```typescript
public get(index: number): DataGoogleAgentRegistryMcpServerInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleAgentRegistryMcpServerInterfacesOutputReference <a name="DataGoogleAgentRegistryMcpServerInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces">DataGoogleAgentRegistryMcpServerInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.protocolBinding"></a>

```typescript
public readonly protocolBinding: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleAgentRegistryMcpServerInterfaces;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces">DataGoogleAgentRegistryMcpServerInterfaces</a>

---


### DataGoogleAgentRegistryMcpServerToolsAnnotationsList <a name="DataGoogleAgentRegistryMcpServerToolsAnnotationsList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get"></a>

```typescript
public get(index: number): DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference <a name="DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.destructiveHint">destructiveHint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.idempotentHint">idempotentHint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.openWorldHint">openWorldHint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.readOnlyHint">readOnlyHint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations">DataGoogleAgentRegistryMcpServerToolsAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destructiveHint`<sup>Required</sup> <a name="destructiveHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.destructiveHint"></a>

```typescript
public readonly destructiveHint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idempotentHint`<sup>Required</sup> <a name="idempotentHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.idempotentHint"></a>

```typescript
public readonly idempotentHint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `openWorldHint`<sup>Required</sup> <a name="openWorldHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.openWorldHint"></a>

```typescript
public readonly openWorldHint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `readOnlyHint`<sup>Required</sup> <a name="readOnlyHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.readOnlyHint"></a>

```typescript
public readonly readOnlyHint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleAgentRegistryMcpServerToolsAnnotations;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations">DataGoogleAgentRegistryMcpServerToolsAnnotations</a>

---


### DataGoogleAgentRegistryMcpServerToolsList <a name="DataGoogleAgentRegistryMcpServerToolsList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get"></a>

```typescript
public get(index: number): DataGoogleAgentRegistryMcpServerToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleAgentRegistryMcpServerToolsOutputReference <a name="DataGoogleAgentRegistryMcpServerToolsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryMcpServer } from '@cdktn/provider-google'

new dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList">DataGoogleAgentRegistryMcpServerToolsAnnotationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools">DataGoogleAgentRegistryMcpServerTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.annotations"></a>

```typescript
public readonly annotations: DataGoogleAgentRegistryMcpServerToolsAnnotationsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList">DataGoogleAgentRegistryMcpServerToolsAnnotationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleAgentRegistryMcpServerTools;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools">DataGoogleAgentRegistryMcpServerTools</a>

---



