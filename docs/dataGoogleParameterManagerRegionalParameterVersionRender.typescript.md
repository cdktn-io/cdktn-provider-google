# `dataGoogleParameterManagerRegionalParameterVersionRender` Submodule <a name="`dataGoogleParameterManagerRegionalParameterVersionRender` Submodule" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameterVersionRender <a name="DataGoogleParameterManagerRegionalParameterVersionRender" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render google_parameter_manager_regional_parameter_version_render}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer"></a>

```typescript
import { dataGoogleParameterManagerRegionalParameterVersionRender } from '@cdktn/provider-google'

new dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender(scope: Construct, id: string, config: DataGoogleParameterManagerRegionalParameterVersionRenderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig">DataGoogleParameterManagerRegionalParameterVersionRenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig">DataGoogleParameterManagerRegionalParameterVersionRenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleParameterManagerRegionalParameterVersionRender resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct"></a>

```typescript
import { dataGoogleParameterManagerRegionalParameterVersionRender } from '@cdktn/provider-google'

dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement"></a>

```typescript
import { dataGoogleParameterManagerRegionalParameterVersionRender } from '@cdktn/provider-google'

dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource"></a>

```typescript
import { dataGoogleParameterManagerRegionalParameterVersionRender } from '@cdktn/provider-google'

dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport"></a>

```typescript
import { dataGoogleParameterManagerRegionalParameterVersionRender } from '@cdktn/provider-google'

dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleParameterManagerRegionalParameterVersionRender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameterVersionRender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleParameterManagerRegionalParameterVersionRender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameterVersionRender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterData">parameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.renderedParameterData">renderedParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionIdInput">parameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

---

##### `renderedParameterData`<sup>Required</sup> <a name="renderedParameterData" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.renderedParameterData"></a>

```typescript
public readonly renderedParameterData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `parameterVersionIdInput`<sup>Optional</sup> <a name="parameterVersionIdInput" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionIdInput"></a>

```typescript
public readonly parameterVersionIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParameterVersionRenderConfig <a name="DataGoogleParameterManagerRegionalParameterVersionRenderConfig" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.Initializer"></a>

```typescript
import { dataGoogleParameterManagerRegionalParameterVersionRender } from '@cdktn/provider-google'

const dataGoogleParameterManagerRegionalParameterVersionRenderConfig: dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameter">parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter DataGoogleParameterManagerRegionalParameterVersionRender#parameter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter_version_id DataGoogleParameterManagerRegionalParameterVersionRender#parameter_version_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#id DataGoogleParameterManagerRegionalParameterVersionRender#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#location DataGoogleParameterManagerRegionalParameterVersionRender#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#project DataGoogleParameterManagerRegionalParameterVersionRender#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter DataGoogleParameterManagerRegionalParameterVersionRender#parameter}.

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter_version_id DataGoogleParameterManagerRegionalParameterVersionRender#parameter_version_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#id DataGoogleParameterManagerRegionalParameterVersionRender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#location DataGoogleParameterManagerRegionalParameterVersionRender#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#project DataGoogleParameterManagerRegionalParameterVersionRender#project}.

---



