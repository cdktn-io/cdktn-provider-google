# `dataGoogleKmsKeyHandles` Submodule <a name="`dataGoogleKmsKeyHandles` Submodule" id="@cdktn/provider-google.dataGoogleKmsKeyHandles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsKeyHandles <a name="DataGoogleKmsKeyHandles" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles google_kms_key_handles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

new dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles(scope: Construct, id: string, config: DataGoogleKmsKeyHandlesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig">DataGoogleKmsKeyHandlesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig">DataGoogleKmsKeyHandlesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleKmsKeyHandles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleKmsKeyHandles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsKeyHandles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsKeyHandles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsKeyHandles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.keyHandles">keyHandles</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList">DataGoogleKmsKeyHandlesKeyHandlesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelectorInput">resourceTypeSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelector">resourceTypeSelector</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `keyHandles`<sup>Required</sup> <a name="keyHandles" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.keyHandles"></a>

```typescript
public readonly keyHandles: DataGoogleKmsKeyHandlesKeyHandlesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList">DataGoogleKmsKeyHandlesKeyHandlesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceTypeSelectorInput`<sup>Optional</sup> <a name="resourceTypeSelectorInput" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelectorInput"></a>

```typescript
public readonly resourceTypeSelectorInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resourceTypeSelector`<sup>Required</sup> <a name="resourceTypeSelector" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelector"></a>

```typescript
public readonly resourceTypeSelector: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsKeyHandlesConfig <a name="DataGoogleKmsKeyHandlesConfig" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.Initializer"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

const dataGoogleKmsKeyHandlesConfig: dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.location">location</a></code> | <code>string</code> | The canonical id for the location. For example: "us-east1". |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.resourceTypeSelector">resourceTypeSelector</a></code> | <code>string</code> | The resource_type_selector argument is used to add a filter query parameter that limits which key handles are retrieved by the data source: ?filter=resource_type_selector="{{resource_type_selector}}". Example values: * resource_type_selector="{SERVICE}.googleapis.com/{TYPE}". [See the documentation about using filters](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyHandles/list). |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles#id DataGoogleKmsKeyHandles#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.project">project</a></code> | <code>string</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The canonical id for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles#location DataGoogleKmsKeyHandles#location}

---

##### `resourceTypeSelector`<sup>Required</sup> <a name="resourceTypeSelector" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.resourceTypeSelector"></a>

```typescript
public readonly resourceTypeSelector: string;
```

- *Type:* string

The resource_type_selector argument is used to add a filter query parameter that limits which key handles are retrieved by the data source: ?filter=resource_type_selector="{{resource_type_selector}}". Example values: * resource_type_selector="{SERVICE}.googleapis.com/{TYPE}". [See the documentation about using filters](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyHandles/list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles#resource_type_selector DataGoogleKmsKeyHandles#resource_type_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles#id DataGoogleKmsKeyHandles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/kms_key_handles#project DataGoogleKmsKeyHandles#project}

---

### DataGoogleKmsKeyHandlesKeyHandles <a name="DataGoogleKmsKeyHandlesKeyHandles" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles.Initializer"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

const dataGoogleKmsKeyHandlesKeyHandles: dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsKeyHandlesKeyHandlesList <a name="DataGoogleKmsKeyHandlesKeyHandlesList" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

new dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.get"></a>

```typescript
public get(index: number): DataGoogleKmsKeyHandlesKeyHandlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleKmsKeyHandlesKeyHandlesOutputReference <a name="DataGoogleKmsKeyHandlesKeyHandlesOutputReference" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer"></a>

```typescript
import { dataGoogleKmsKeyHandles } from '@cdktn/provider-google'

new dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.resourceTypeSelector">resourceTypeSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles">DataGoogleKmsKeyHandlesKeyHandles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceTypeSelector`<sup>Required</sup> <a name="resourceTypeSelector" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.resourceTypeSelector"></a>

```typescript
public readonly resourceTypeSelector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleKmsKeyHandlesKeyHandles;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles">DataGoogleKmsKeyHandlesKeyHandles</a>

---



