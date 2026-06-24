# `dataGoogleVertexAiReasoningEngineQuery` Submodule <a name="`dataGoogleVertexAiReasoningEngineQuery` Submodule" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiReasoningEngineQuery <a name="DataGoogleVertexAiReasoningEngineQuery" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer"></a>

```typescript
import { dataGoogleVertexAiReasoningEngineQuery } from '@cdktn/provider-google'

new dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery(scope: Construct, id: string, config: DataGoogleVertexAiReasoningEngineQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig">DataGoogleVertexAiReasoningEngineQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig">DataGoogleVertexAiReasoningEngineQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod">resetClassMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClassMethod` <a name="resetClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod"></a>

```typescript
public resetClassMethod(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct"></a>

```typescript
import { dataGoogleVertexAiReasoningEngineQuery } from '@cdktn/provider-google'

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement"></a>

```typescript
import { dataGoogleVertexAiReasoningEngineQuery } from '@cdktn/provider-google'

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource"></a>

```typescript
import { dataGoogleVertexAiReasoningEngineQuery } from '@cdktn/provider-google'

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport"></a>

```typescript
import { dataGoogleVertexAiReasoningEngineQuery } from '@cdktn/provider-google'

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVertexAiReasoningEngineQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVertexAiReasoningEngineQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiReasoningEngineQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput">classMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput">reasoningEngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod">classMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId">reasoningEngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `classMethodInput`<sup>Optional</sup> <a name="classMethodInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput"></a>

```typescript
public readonly classMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reasoningEngineIdInput`<sup>Optional</sup> <a name="reasoningEngineIdInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput"></a>

```typescript
public readonly reasoningEngineIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `classMethod`<sup>Required</sup> <a name="classMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod"></a>

```typescript
public readonly classMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reasoningEngineId`<sup>Required</sup> <a name="reasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId"></a>

```typescript
public readonly reasoningEngineId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiReasoningEngineQueryConfig <a name="DataGoogleVertexAiReasoningEngineQueryConfig" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiReasoningEngineQuery } from '@cdktn/provider-google'

const dataGoogleVertexAiReasoningEngineQueryConfig: dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId">reasoningEngineId</a></code> | <code>string</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region">region</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod">classMethod</a></code> | <code>string</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input">input</a></code> | <code>string</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project">project</a></code> | <code>string</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `reasoningEngineId`<sup>Required</sup> <a name="reasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId"></a>

```typescript
public readonly reasoningEngineId: string;
```

- *Type:* string

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `classMethod`<sup>Optional</sup> <a name="classMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod"></a>

```typescript
public readonly classMethod: string;
```

- *Type:* string

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---



