# `dataGoogleAgentRegistryEndpoint` Submodule <a name="`dataGoogleAgentRegistryEndpoint` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryEndpoint <a name="DataGoogleAgentRegistryEndpoint" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint google_agent_registry_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

new dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint(scope: Construct, id: string, config: DataGoogleAgentRegistryEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig">DataGoogleAgentRegistryEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig">DataGoogleAgentRegistryEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetEndpointId"></a>

```typescript
public resetEndpointId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isConstruct"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformElement"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformDataSource"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleAgentRegistryEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAgentRegistryEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAgentRegistryEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList">DataGoogleAgentRegistryEndpointInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.attributes"></a>

```typescript
public readonly attributes: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.interfaces"></a>

```typescript
public readonly interfaces: DataGoogleAgentRegistryEndpointInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList">DataGoogleAgentRegistryEndpointInterfacesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryEndpointConfig <a name="DataGoogleAgentRegistryEndpointConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

const dataGoogleAgentRegistryEndpointConfig: dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.endpointId">endpointId</a></code> | <code>string</code> | The unique identifier for the Endpoint. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.filter">filter</a></code> | <code>string</code> | A filter string that identifies a unique endpoint. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#id DataGoogleAgentRegistryEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#project DataGoogleAgentRegistryEndpoint#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#location DataGoogleAgentRegistryEndpoint#location}

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The unique identifier for the Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#endpoint_id DataGoogleAgentRegistryEndpoint#endpoint_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A filter string that identifies a unique endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#filter DataGoogleAgentRegistryEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#id DataGoogleAgentRegistryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_endpoint#project DataGoogleAgentRegistryEndpoint#project}.

---

### DataGoogleAgentRegistryEndpointInterfaces <a name="DataGoogleAgentRegistryEndpointInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfaces.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

const dataGoogleAgentRegistryEndpointInterfaces: dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfaces = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryEndpointInterfacesList <a name="DataGoogleAgentRegistryEndpointInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

new dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.get"></a>

```typescript
public get(index: number): DataGoogleAgentRegistryEndpointInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleAgentRegistryEndpointInterfacesOutputReference <a name="DataGoogleAgentRegistryEndpointInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer"></a>

```typescript
import { dataGoogleAgentRegistryEndpoint } from '@cdktn/provider-google'

new dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfaces">DataGoogleAgentRegistryEndpointInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.protocolBinding"></a>

```typescript
public readonly protocolBinding: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleAgentRegistryEndpointInterfaces;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryEndpoint.DataGoogleAgentRegistryEndpointInterfaces">DataGoogleAgentRegistryEndpointInterfaces</a>

---



