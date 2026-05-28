# `dataGoogleComputeRouters` Submodule <a name="`dataGoogleComputeRouters` Submodule" id="@cdktn/provider-google.dataGoogleComputeRouters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouters <a name="DataGoogleComputeRouters" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers google_compute_routers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRouters(scope: Construct, id: string, config?: DataGoogleComputeRoutersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig">DataGoogleComputeRoutersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig">DataGoogleComputeRoutersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRouters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRouters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRouters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.routers">routers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList">DataGoogleComputeRoutersRoutersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `routers`<sup>Required</sup> <a name="routers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.routers"></a>

```typescript
public readonly routers: DataGoogleComputeRoutersRoutersList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList">DataGoogleComputeRoutersRoutersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRoutersConfig <a name="DataGoogleComputeRoutersConfig" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersConfig: dataGoogleComputeRouters.DataGoogleComputeRoutersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}.

---

### DataGoogleComputeRoutersRouters <a name="DataGoogleComputeRoutersRouters" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRouters: dataGoogleComputeRouters.DataGoogleComputeRoutersRouters = { ... }
```


### DataGoogleComputeRoutersRoutersBgp <a name="DataGoogleComputeRoutersRoutersBgp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRoutersBgp: dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp = { ... }
```


### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges: dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges = { ... }
```


### DataGoogleComputeRoutersRoutersBgpPeers <a name="DataGoogleComputeRoutersRoutersBgpPeers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRoutersBgpPeers: dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers = { ... }
```


### DataGoogleComputeRoutersRoutersInterfaces <a name="DataGoogleComputeRoutersRoutersInterfaces" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRoutersInterfaces: dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces = { ... }
```


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeys <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeys" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRoutersMd5AuthenticationKeys: dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys = { ... }
```


### DataGoogleComputeRoutersRoutersNats <a name="DataGoogleComputeRoutersRoutersNats" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

const dataGoogleComputeRoutersRoutersNats: dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges</a>

---


### DataGoogleComputeRoutersRoutersBgpList <a name="DataGoogleComputeRoutersRoutersBgpList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersBgpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersBgpOutputReference <a name="DataGoogleComputeRoutersRoutersBgpOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedGroups">advertisedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertiseMode">advertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.keepaliveInterval">keepaliveInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp">DataGoogleComputeRoutersRoutersBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertisedGroups`<sup>Required</sup> <a name="advertisedGroups" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedGroups"></a>

```typescript
public readonly advertisedGroups: string[];
```

- *Type:* string[]

---

##### `advertisedIpRanges`<sup>Required</sup> <a name="advertisedIpRanges" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedIpRanges"></a>

```typescript
public readonly advertisedIpRanges: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList</a>

---

##### `advertiseMode`<sup>Required</sup> <a name="advertiseMode" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertiseMode"></a>

```typescript
public readonly advertiseMode: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `keepaliveInterval`<sup>Required</sup> <a name="keepaliveInterval" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.keepaliveInterval"></a>

```typescript
public readonly keepaliveInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRoutersBgp;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp">DataGoogleComputeRoutersRoutersBgp</a>

---


### DataGoogleComputeRoutersRoutersBgpPeersList <a name="DataGoogleComputeRoutersRoutersBgpPeersList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersBgpPeersOutputReference <a name="DataGoogleComputeRoutersRoutersBgpPeersOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertiseMode">advertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enable">enable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enableIpv6">enableIpv6</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.managementType">managementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers">DataGoogleComputeRoutersRoutersBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertisedRoutePriority`<sup>Required</sup> <a name="advertisedRoutePriority" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertisedRoutePriority"></a>

```typescript
public readonly advertisedRoutePriority: number;
```

- *Type:* number

---

##### `advertiseMode`<sup>Required</sup> <a name="advertiseMode" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertiseMode"></a>

```typescript
public readonly advertiseMode: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.managementType"></a>

```typescript
public readonly managementType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRoutersBgpPeers;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers">DataGoogleComputeRoutersRoutersBgpPeers</a>

---


### DataGoogleComputeRoutersRoutersInterfacesList <a name="DataGoogleComputeRoutersRoutersInterfacesList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersInterfacesOutputReference <a name="DataGoogleComputeRoutersRoutersInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedInterconnectAttachment">linkedInterconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedVpnTunnel">linkedVpnTunnel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.redundantInterface">redundantInterface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces">DataGoogleComputeRoutersRoutersInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `linkedInterconnectAttachment`<sup>Required</sup> <a name="linkedInterconnectAttachment" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedInterconnectAttachment"></a>

```typescript
public readonly linkedInterconnectAttachment: string;
```

- *Type:* string

---

##### `linkedVpnTunnel`<sup>Required</sup> <a name="linkedVpnTunnel" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedVpnTunnel"></a>

```typescript
public readonly linkedVpnTunnel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `redundantInterface`<sup>Required</sup> <a name="redundantInterface" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.redundantInterface"></a>

```typescript
public readonly redundantInterface: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRoutersInterfaces;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces">DataGoogleComputeRoutersRoutersInterfaces</a>

---


### DataGoogleComputeRoutersRoutersList <a name="DataGoogleComputeRoutersRoutersList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys">DataGoogleComputeRoutersRoutersMd5AuthenticationKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRoutersMd5AuthenticationKeys;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys">DataGoogleComputeRoutersRoutersMd5AuthenticationKeys</a>

---


### DataGoogleComputeRoutersRoutersNatsList <a name="DataGoogleComputeRoutersRoutersNatsList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRoutersRoutersNatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersNatsOutputReference <a name="DataGoogleComputeRoutersRoutersNatsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.minPortsPerVm">minPortsPerVm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIps">natIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats">DataGoogleComputeRoutersRoutersNats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableEndpointIndependentMapping`<sup>Required</sup> <a name="enableEndpointIndependentMapping" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.enableEndpointIndependentMapping"></a>

```typescript
public readonly enableEndpointIndependentMapping: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `icmpIdleTimeoutSec`<sup>Required</sup> <a name="icmpIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.icmpIdleTimeoutSec"></a>

```typescript
public readonly icmpIdleTimeoutSec: number;
```

- *Type:* number

---

##### `minPortsPerVm`<sup>Required</sup> <a name="minPortsPerVm" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.minPortsPerVm"></a>

```typescript
public readonly minPortsPerVm: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `natIpAllocateOption`<sup>Required</sup> <a name="natIpAllocateOption" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIpAllocateOption"></a>

```typescript
public readonly natIpAllocateOption: string;
```

- *Type:* string

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.sourceSubnetworkIpRangesToNat"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNat: string;
```

- *Type:* string

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpEstablishedIdleTimeoutSec"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSec: number;
```

- *Type:* number

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpTransitoryIdleTimeoutSec"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSec: number;
```

- *Type:* number

---

##### `udpIdleTimeoutSec`<sup>Required</sup> <a name="udpIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.udpIdleTimeoutSec"></a>

```typescript
public readonly udpIdleTimeoutSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRoutersNats;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats">DataGoogleComputeRoutersRoutersNats</a>

---


### DataGoogleComputeRoutersRoutersOutputReference <a name="DataGoogleComputeRoutersRoutersOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouters } from '@cdktn/provider-google'

new dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList">DataGoogleComputeRoutersRoutersBgpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList">DataGoogleComputeRoutersRoutersBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.encryptedInterconnectRouter">encryptedInterconnectRouter</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList">DataGoogleComputeRoutersRoutersInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.md5AuthenticationKeys">md5AuthenticationKeys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList">DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.nats">nats</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList">DataGoogleComputeRoutersRoutersNatsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters">DataGoogleComputeRoutersRouters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgp"></a>

```typescript
public readonly bgp: DataGoogleComputeRoutersRoutersBgpList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList">DataGoogleComputeRoutersRoutersBgpList</a>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: DataGoogleComputeRoutersRoutersBgpPeersList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList">DataGoogleComputeRoutersRoutersBgpPeersList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptedInterconnectRouter`<sup>Required</sup> <a name="encryptedInterconnectRouter" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.encryptedInterconnectRouter"></a>

```typescript
public readonly encryptedInterconnectRouter: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.interfaces"></a>

```typescript
public readonly interfaces: DataGoogleComputeRoutersRoutersInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList">DataGoogleComputeRoutersRoutersInterfacesList</a>

---

##### `md5AuthenticationKeys`<sup>Required</sup> <a name="md5AuthenticationKeys" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.md5AuthenticationKeys"></a>

```typescript
public readonly md5AuthenticationKeys: DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList">DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nats`<sup>Required</sup> <a name="nats" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.nats"></a>

```typescript
public readonly nats: DataGoogleComputeRoutersRoutersNatsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList">DataGoogleComputeRoutersRoutersNatsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRoutersRouters;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters">DataGoogleComputeRoutersRouters</a>

---



